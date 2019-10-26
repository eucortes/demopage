'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let app = express();

//cargar rutas
let projectRoutes = require('./routes/project');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//rutas
app.use('/api', projectRoutes)

module.exports = app;