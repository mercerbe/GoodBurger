//dependencies
const express = require('express');
const mysql = require('mysql');
const exphbrs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

//express setup
const app = express();
const PORT = process.env.PORT || 3000;

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//view engine
app.engine('handlebars', exphbrs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//+++++++++++routing++++++++++++++//
//static
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/views', express.static(process.cwd() + '/views'));
//paths
require(path.join(__dirname, './models/burger'))//(app);
require(path.join(__dirname, './controllers/burgers_controller'))//(app);


//express listening
app.listen(PORT, ()=>{console.log('app listening on PORT:',PORT,'...');});
