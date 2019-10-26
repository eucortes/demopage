"use strict";
const jwt = require("jwt-simple");
const moment = require("moment");
const configuracion = require("../config-env");

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix,
        exp: moment()
            .add(14, "days")
            .unix()
    };
    return jwt.encode(payload, configuracion.secret);
}

function decodeToken(token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, configuracion.secret)
        } catch {
            reject({
                status: 500,
                messaje: 'invalid Token'
            })
        }

    })
}
module.exports = createToken;