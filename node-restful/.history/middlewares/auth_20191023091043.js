"use strict";
const services = require("../services");

//let AuthModule = {

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "No tienes autorización" });
    }

    const token = req.headers.authorization.split(" ")[1];
    services
        .decodeToken(token)
        .then(response => {
            console.log("then", response);

            req.user = response;
        })
        .catch(response => {
            res.status(response.status).send(response.message);
        });
}
//}
//module.exports = AuthModule;
module.exports = isAuth;