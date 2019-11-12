"use strict";
let mongoose = require("mongoose");
let app = require("./app");
const { port, secret, usuario } = require("./config-env");

mongoose.Promise = global.Promise;
mongoose
    .connect(
        "mongodb+srv://usuario1:ContraseñaLarga@cluster0-7wd49.azure.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
    )
    //mongoose.connect('mongodb://localhost:27017/portafolio', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Conectado a base de datos");
        //creación de servidor
        app.listen(port, () => {
            console.log("servidor corriendo correctamente en localhost:3700");
        });
    })
    .catch(err => console.log(err));