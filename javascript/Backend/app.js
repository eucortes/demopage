"use strict";
let express = require("express");
let bodyParser = require("body-parser");
let app = express();

//cargar rutas
let projectRoutes = require("./routes/project");

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//rutas
app.use("/api", projectRoutes);
/* app.get('/', (req, res) => {
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
        }) */
//exportar
module.exports = app;