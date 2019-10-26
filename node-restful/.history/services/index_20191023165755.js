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

function codifica(password, salt) {
    const codificado = new Promise((resolve, reject) => {
        if (!salt) {
            bcrypt.genSalt(10, (err, saltx) => {
                if (err) reject(err);
                bcrypt.hash(password, saltx, null, (err, hash) => {
                    if (err) reject(err);
                    resolve({ hash: hash, salt: saltx });
                });
            });
        } else {
            bcrypt.hash(password, salt, null, (err, hash) => {
                if (err) reject(err);
                resolve({ hash: hash, salt: salt });
            });
        }
    });
    return codificado;
}

function comparaCodifica(data, hash) {
    const compara = new Promise((resolve, reject) => {
        bcrypt.compare(data, hash, err => {
            if (err) reject(err);
        });
    });
    return compara;
}

module.exports = { createToken, decodeToken, codifica };