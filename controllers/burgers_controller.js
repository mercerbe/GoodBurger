//dependencies
const express = require('express');
const burger = require('../models/burger.js');

//use express router
const router = express.Router();

//+++++++++++++ ALL ROUTES +++++++++++++++++//

//home
router.get("/", (req, res) => {
  res.redirect("/index");
});

//all
router.get("/index", (req, res) => {
  burger.all((data)=>{
    let obj = {burger:data};
    res.render("index", obj);
  })
})

//insert
router.post("/burgers/insert", (req, res) => {
  burger.insert(req.body.burger_name, (data) => {
    res.redirect("/index");
  })
})

//update (devour)
router.post("/burgers/eat/:id", (req, res) =>{
  let id = req.params.id;
  burger.update(id, (data)=> {
    res.redirect("/index");
  })
})



module.exports = router;
