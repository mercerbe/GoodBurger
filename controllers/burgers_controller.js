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

//api
router.get('/api/burgers', (req, res) => {
  burgers.all((data) => {
    let obj = {burgers: data};
    res.json(obj);
  })
})

//insert
router.post("/api/burgers", (req, res) => {
  burgers.insert(req.body.burger_name, (data) => {
    res.redirect("/index");
  })
})

//update (devour)
router.post("/api/burgers/:id", (req, res) =>{
  let id = req.params.id;
  burgers.update(id, (data)=> {
    res.redirect("/index");
  })
})

//update (clear)
router.post("/burgers/clear/:id", (req, res) => {
  let cleared = req.params.id;
    burgers.clear(cleared, (data) => {
      res.redirect("/index");
    })
})



module.exports = router;
