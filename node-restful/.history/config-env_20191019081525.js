const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.PORT || 3700,
    secret: process.env.SECRET || "DefineTuClave",
    usuario: process.env.USUARIO || "Default"
};