'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let app = express();

//rutas

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS


app.get('/', (req, res) => {
        res.status(200).send('<h1>Hola mundo desde mi Restful</h1>')
    }) //rutas
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde mi Restful'
    })
})

//exportar
module.exports = app;