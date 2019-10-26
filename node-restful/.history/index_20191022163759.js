"use strict";
const configuracion = require("./config-env");
const express = require("express");
let mongoose = require('mongoose');
let app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a base de datos")
            //creación de servidor
        app.listen(configuracion.port, () => {
            console.log("servidor corriendo correctamente en localhost:3700")
        })
    })
    .catch(err => console.log(err));