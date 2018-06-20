const orm = require('../config/orm.js');



  const burger = {

    all: (cb)=>{
      orm.selectAll((res)=>{
        cb(res);
      })
    },
    insert: (burger_name, cb)=>{
      orm.insertOne(burger_name, (res)=>{
        console.log(burger_name);
        cb(res);
      })
    },
    update: (id, cb)=>{
      orm.updateOne(id, (res)=>{
        console.log(id + " added");
        cb(res);
      })
    },
    clear: (id, cb) => {
      orm.clearOne(id, (res) => {
        console.log(id + " cleared");
        cb(res);
      })
    }
  };

module.exports = burger;
