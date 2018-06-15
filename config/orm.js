const connection = require('./connection.js');

//export ORM
module.exports = (app)=>{

  var orm = {

    //select all
    SelectAll: (cb)=>{
      let queryString = "SELECT * FROM burgers;"
      connection.query(queryString, (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },
    //insert one
    InsertOne: (burger_name, cb)=>{
      let queryString = "INSERT INTO burgers (burger_name) VALUE ?;"
      connection.query(queryString, burger_name, (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },
    //update one
    UpdateOne: (id, cb)=>{
      let queryString = "UPDATE burgers SET ? WHERE ?;"
      connection.query(queryString, [{devoured:true}, {id: id}], (err, res)=>{
        if(err){throw err;}
        cb(res);
      });
    },


  }

};
