const connection = require('./connection.js');

//export ORM

  var orm = {

    //select all
    selectAll: (cb) => {
      let queryString = "SELECT * FROM burgers;"
      connection.query(queryString, (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },
    //insert one
    insertOne: (burger_name, cb) => {
      let queryString = "INSERT INTO burgers (burger_name) VALUE ?;"
      connection.query(queryString, burger_name, (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },
    //update one
    updateOne: (id, cb) => {
      let queryString = "UPDATE burgers SET ? WHERE ?;"
      connection.query(queryString, [{devoured:true}, {id: id}], (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },


  }

module.exports = orm;
