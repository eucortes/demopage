'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let app = express();


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//rutas
let projectRoutes = require('./routes/project');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hola mundo desde mi Restful</h1>')
})
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde mi Restful'
    })
})

app.post('/test2', (req, res) => {
        console.log(req.query.nombre)
        res.status(200).send({
            message: 'Hola mundo desde mi Restful'
        })
    })
    //exportar
module.exports = app;