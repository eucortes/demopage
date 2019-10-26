"use strict";
const services = require('../services')

//let AuthModule = {

function isAuth(req, res, next) {
    if (!req.headers.autorization) {
        return res.status(403).send({ message: "No tienes autorización" });
    }
    const token = req.headers.autorization.split(" ")[1];
    services.

}
//}
//module.exports = AuthModule;
module.exports = isAuth;