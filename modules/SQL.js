import mysql from 'mysql';
    
export default class SQL {
      constructor(config) {
        this.con = mysql.createConnection(config);
        this.isConnected = false;
        this.onConnect = function()  {

        }
        this.con.connect((err)=>{
            if (err) throw err;
            console.log("Connected!");
            this.isConnected = true;
            this.onConnect()
          });
        this.getFromQuery = (query,callback)=>{
            if (this.isConnected) {
                    this.con.query(query,(err, result)=>{
                        if (err) {console.log(err)} else {
                            console.log("Query Successful!");
                            return callback(result);
                        };
                    });               
            } else {
                console.log('DB Not connected!')
            }
        }
        this.createTable = (config)=>{
            var rows = '';
            for (let i = 0; i< config.rows.length;i++) {
                rows += `${config.rows[i].name} ${config.rows[i].type}`
                if (i + 1 < config.rows.length) {rows += `, `}
            }
            var query = `CREATE TABLE ${config.name} (${rows})`
            this.getFromQuery(query,(data)=>{
                console.log("TABLE CREATED");
            })
        }
        this.insertToTable = (table,config)=>{
            var fields = '';
            var values = ''
            for (let i = 0; i< config.query.length;i++) {
                fields += config.query[i].name
                if (i + 1 < config.query.length) { fields += `, `}
                values += `'${config.query[i].value}'`
                if (i + 1 < config.query.length) { values += `, `}
            }
            var query = `INSERT INTO ${table} (${fields}) VALUES (${values})`
            this.getFromQuery(query,(data)=>{
                console.log("INSERTED!");
            })
        }
        this.getTable = (table,callback) => {
            var query = `SELECT * FROM ${table}`
            this.getFromQuery(query,(data)=>{
                return callback(data);
            })
        }
      }
  }
 