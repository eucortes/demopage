"use strict";
const jwt = require("jwt-simple");
const moment = require("moment");
const configuracion = require("../config-env");

const AuthModule = {

    function isAuth(req, res, next) {
        if (!req.headers.autorization) {
            return res.status(403).send({ message: "No tienes autorización" });
        }
        const token = req.headers.autorization.split(" ")[1];
        const payload = jwt.decode(token, configuracion.secret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: "el token ha expirado" });
        }
        req.user = payload.sub;
        next();
    }
}
module.export = AuthModule;