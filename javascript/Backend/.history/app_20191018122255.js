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
app.get('/test', (req, res) => {
    res.status(200).send({

    })
})

//exportar
module.exports = app;