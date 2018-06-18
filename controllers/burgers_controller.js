//dependencies
const express = require('express');
const burgers = require('../models/burgers.js');

//use express router
const router = express.Router();

//+++++++++++++ ALL ROUTES +++++++++++++++++//

//home
router.get("/", (req, res) => {
  res.redirect("/index");
});

//all
router.get("/index", (req, res) => {
  burgers.all((data)=>{
    let obj = {burgers : data};
    res.render("index", obj);
  })
})

//insert
router.post("/burgers/insert", (req, res) => {
  burgers.insert(req.body.burger_name, (data) => {
    res.redirect("/index");
  })
})

//update (devour)
router.post("/burgers/eat/:id", (req, res) =>{
  let id = req.params.id;
  burgers.update(id, (data)=> {
    res.redirect("/index");
  })
})



module.exports = router;
