//dependencies
const mysql = require('mysql');


module.exports = (app)=>{
//connect to sql
const connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: '',
  password: '',
  database:'burgers_db'
});

connection.connect((err)=>{
  if(err){console.log('error connecting: ' + err.stack); return;}
  console.log('connected with id: ' + connection.threadId);
});

};
