//dependencies
const express = require('express');
const burger = require('../models/burger.js');

//use express router
const router = express.Router();

//+++++++++++++ ALL ROUTES +++++++++++++++++//

//home
router.get("/", (req, res)=>{
  res.redirect("index");
});

module.exports = router;
