'use strict'
let mongoose = require('mongoose');
let app = require('./app');
let port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a base de datos")
            //creación de servidor

    })
    .catch(err => console.log(err));