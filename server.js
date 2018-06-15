//dependencies
const express = require('express');
const exphbrs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

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
const router = require('./controllers/burgers_controller.js');
app.use('/', router);
//static
app.use('/public', express.static(process.cwd() + '/public'));

//express listening
app.listen(PORT, ()=>{console.log('app listening on PORT:',PORT,'...');});
