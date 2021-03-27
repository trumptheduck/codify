const express = require('express');
const app = express()
const http = require('http').Server(app);
const path = require("path")
const httpPort = 80;
var data = [
    {
        name: '1.Introduction to Javascript',
        index:1,
        content: ` <p>Bài 1</p>
        <p>Để in giá trị ra console, ta dùng hàm:</p>
        <code class="language-js">console.log("value_to_print")</code><br>
        <p>Hãy sử dụng hàm trên để in ra console: Hello world!</p>`
    },
    {
        name: '2.Data types',
        index:2,
        content: ` <p>Bài 2</p>
        <p>Để khai báo biến, ta dùng </p>
        <code class="language-js">var variable_name</code><br>
        <code class="language-js">let variable_name</code><br>
        <code class="language-js">const constant_name</code><br>
        <p>Biến của Javascript không có loại, nên có thể nhận nhiều loại giá trị như String, Char, Int, Float...</p>
        <p>Hãy khai báo và in ra màn hình 4 loại biến: Char, Int, String, Float</p>`
        
    },
    {
        name: '3.Function, parameters and return',
        index:3,
        content: ` <p>Bài 3</p>
        <code class="language-js">funtion function_name(parameters) {
            //Do something
        }</code><br>
        `
        
    },
    {
        name: '4.Introduction to Arrays and Objects',
        index:4,
        content: ` <p>Bài 4</p>
        <code class="language-js">var array = [];</code><br>
        <code class="language-js">var object = {attr1: "Something", attr2: 69};</code><br>
        `
    },
    {
        name: '5.Basic Math procedures',
        index:5,
        content: ` <p>Bài 5</p>
        <code class="language-js">Math.pow(x,2) //x^2</code><br>
        <code class="language-js">Math.sqrt()</code><br>
        <code class="language-js">Math.round()</code><br>
        <code class="language-js">Math.random()</code><br>
        <code class="language-js">a++</code><br>
        <code class="language-js">a--</code><br>
        <code class="language-js">a + b</code><br>
        <code class="language-js">a - b</code><br>
        <code class="language-js">a * b</code><br>
        <code class="language-js">a / b</code><br>
        <code class="language-js">a =+ 2</code><br>
        <code class="language-js">a -+ 2</code><br>
        `
    },
]
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'))
})
app.get('/console', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/console.html'))
  })
  app.get('/api/data', function(req, res) {
      res.send(JSON.stringify(data.find(element => element.index == req.query.index)))
  })
http.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})