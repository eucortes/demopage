'use strict'
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a base de datos")
    })
    .catch(err => console.log(err));