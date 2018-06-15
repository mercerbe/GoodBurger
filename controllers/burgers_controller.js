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
router.post("/index", (req, res) => {
  burger.create(req.body.burger_name, (data) => {
    res.redirect(req.originalUrl);
  })
})

//update (devour)
router.post("/index", (req, res) =>{
  let id = req.params.id;
  burger.update(id, (data)=> {
    res.redirect(req.originalUrl);
  })
})



module.exports = router;
