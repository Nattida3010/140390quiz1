var express = require('express');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect();
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});
app.get('/home', function (req, res) {
    res.render('pages/home');
});


app.get('/students', function (req, res){
    connection.query('SELECT * FROM students', function (error, results, fields) {
        console.log('DATA'+results);
        res.render('pages/students',{students : results})
      });
});

app.get('/subjects', function (req, res){
    connection.query('SELECT * FROM subjects', function (error, results, fields) {
        console.log('DATA'+results);
        res.render('pages/subjects',{subjects : results})
      });
});

console.log('App is running at http://localhost:8081');

app.listen(8081);
