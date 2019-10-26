"use strict";
const jwt = require("jwt-simple");
const moment = require("moment");
const bcrypt = require("bcrypt-nodejs");

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
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, configuracion.secret);
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: "el token ha expirado"
                });
            }
            resolve(payload.sub);
        } catch (err) {
            reject({
                status: 500,
                message: "invalid Token"
            });
        }
    });
    return decoded;
}

function codifica(password) {
    const codificado = new Promise((resolve, reject) => {
                bcrypt.genSalt(10, (err, salt) => {
                        if (err) reject(err)

                        bcrypt.hash(password, salt, null, (err, hash) => {
                            if (err) reject(err);
                            resolve(hash)
                        });
                    }

                })

            module.exports = { createToken, decodeToken };