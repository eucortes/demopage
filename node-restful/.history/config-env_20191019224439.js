const dotenv = require("dotenv");
dotenv.config();

let configuracion = {
    port: process.env.PORT || 3700,
    secret: process.env.SECRET || "DefineTuClave",
    usuario: process.env.USUARIO || "Default"
}

module.exports = configuracion;