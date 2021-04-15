import express from 'express'
import http from 'http'
import path from 'path'
import session from 'express-session';
import Hash from './modules/Hash.js'
import SQL from './modules/SQL.js'
import Gmail from './modules/Gmail.js';
import './placeholders/data.js'
const app = express()
const httpServer = http.Server(app);
const httpPort = 5500;
var cachedData = [];
var SQLconfig = {
    host: "freedb.tech",
    user: "freedbtech_nhat",
    password: "nhat1234",
    database: "freedbtech_nhatnhat"
  }
const UsersTableConfig = {
    name : 'Users',
    rows : [
        {
            name : 'email',
            type : 'VARCHAR(255)'
        },
        {
            name : 'hash',
            type : 'VARCHAR(1000)'
        },
        {
            name : 'id',
            type : 'VARCHAR(255)'
        },
        {
            name : 'isVerified',
            type : 'VARCHAR(255)'
        },
        {
            name : 'verifyOTP',
            type : 'VARCHAR(255)'
        },
    ]
}
class User {
    constructor(email,hash,id,isVerified,verifyOTP) {
        this.query = [
            {
                name: "email",
                value: email
            },
            {
                name: "hash",
                value: JSON.stringify(hash)
            },
            {
                name: "id",
                value: id
            },
            {
                name: "isVerified",
                value: isVerified
            },
            {
                name: "verifyOTP",
                value: verifyOTP
            },
        ]
    }
}
class DatabaseManager {
    static updateCachedData (callback=()=>{}) {
        MySQL.getTable('Users',(data)=> {
            cachedData = data;
            callback();
        })
    }
    static createUserTable () {
        MySQL.createTable(UsersTableConfig);
    }
    static addUserToDatabase (user) {
        MySQL.insertToTable('Users',user)
    }
}
class AccountManager  {
    static newAccount(email,password) {
    DatabaseManager.updateCachedData(()=>{
        let accountExisted = cachedData.find(user => user.email === email)
        if (accountExisted!==undefined) {
        console.log("Email taken!")
        } else {
        var user = new User(email,Hash.hash(password,Hash.generateSalt(12)),Hash.makeid(16),false,Hash.makeid(32));
        DatabaseManager.addUserToDatabase(user)
        console.log(`Account: ${email} has been created!`)
        DatabaseManager.updateCachedData(()=>{
        console.log("Cached",cachedData)
        console.log(JSON.parse(cachedData[0].hash))
        })
      }
    })
    };
    static deleteAccount(email) {
        users = users.filter(user => user.email === email);
        console.log(`Account: ${email} is deleted!`)
        console.log('Users:',users)
    }
    static login(email,password,callback) {
        DatabaseManager.updateCachedData(()=>{
            let user = cachedData.find(user => user.email === email)
            var isAuthorized = false;
            if (user===undefined) {
            console.log("Account not existed!")
            } else {
            var hash = JSON.parse(user.hash)
            isAuthorized = Hash.compare(password,hash)
          }
          return callback(isAuthorized)
        })
    }
  }
var MySQL = new SQL(SQLconfig);
MySQL.onConnect= () =>{
    //DatabaseManager.createUserTable()
    //AccountManager.newAccount("nhatyt123@gmail.com","nhat1234")
   // DatabaseManager.updateCachedData(()=>{
    //    console.log("Cached",cachedData)
    //    console.log(JSON.parse(cachedData[0].hash))
    //})
    //Gmail.sendEmail('nhatyt123@gmail.com','Fuck you!',"Yeah")
}


app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    key: 'user_sid',
    secret: 'hasdg1g23kbciaufgd18v9q7vfiafva98df7aaG',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
var sessionChecker = (req, res, next) => {
    if (req.session.loggedin) {
        res.redirect('/home');
    } else {
        next()
    }
    };
    app.get('/',sessionChecker,function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'))
    })
    app.get('/console', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/views/console.html'))
    })
    app.get('/xls', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/views/xls.html'))
    })
    app.get('/api/data', function(req, res) {
        res.send(JSON.stringify(data.find(element => element.index == req.query.index)))
    })
    app.get('/api/login', function(req, res) {
        if (req.query.email !== undefined&&req.query.password !== undefined) {
            AccountManager.login(req.query.email,req.query.password,(isAuthorized)=>{
                if (isAuthorized) {
                    req.session.loggedin = true;
                    req.session.username = req.query.email;
                    res.send("true");
                } else {
                    res.send("false");
                }
                res.end();
            })
        } else {
            res.redirect('/')
        }
        
    })
    app.get('/dashboard', (req, res)=>{
        if (req.session.loggedin) {
            res.send('Welcome back, ' + req.session.username + '!');
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
    });
httpServer.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})