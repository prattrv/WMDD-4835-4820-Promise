// Create a database called demo:
//
// sudo service mysqld start
// sudo mysql -u root
// CREATE DATABASE demo;
const mysql = require('mysql');

exports.cp = mysql.createPool({
  connectionLimit:10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo',
  multipleStatements: true
});

