'use strict'

const dotenv = require('dotenv');
dotenv.config();




let mongoose = require('mongoose');
let app = require('./app');
let port = process.env.PORT;

console.log(port)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a base de datos")
            //creación de servidor
        app.listen(port, () => {
            console.log("servidor corriendo correctamente en localhost:3700")
        })
    })
    .catch(err => console.log(err));