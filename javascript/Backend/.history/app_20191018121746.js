'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let app = express();

//rutas

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//rutas

//exportar
module.exports = app;