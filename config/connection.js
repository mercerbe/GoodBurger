//dependencies
const mysql = require('mysql');
require('dotenv').config();

//connect to sql
const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: process.env.PASS || 'root',
  database:'burgers_db'
});

connection.connect((err)=>{
  if(err){console.log('error connecting: ' + err.stack); return;}
  console.log('db connected with id: ' + connection.threadId);
});

module.exports = connection;
