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
module.exports = createToken;