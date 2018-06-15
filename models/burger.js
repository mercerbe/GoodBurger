const orm = require('../config/orm.js');



  let burger = {

    all: (cb)=>{
      orm.selectAll((res)=>{
        cb(res);
      })
    },
    insert: (burger_name, cb)=>{
      orm.insertOne(burger_name, (res)=>{
        cb(res);
      })
    },
    update: (id, cb)=>{
      orm.updateOne(id, (res)=>{
        cb(res);
      })
    }
  };

module.exports = burger;
