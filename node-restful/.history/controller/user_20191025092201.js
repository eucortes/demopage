"use strict";
const mongoose = require("mongoose");
const User = require("../models/user");
const service = require("../services");

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        //  password: req.body.password,
        displayname: req.body.displayname
    });
    //  console.log(user)
    user.save(err => {
        if (err) {
            console.log(err);
            return res
                .status(500)
                .send({ message: `error al crear el usuario: ${err}` });
        }
        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn(req, res) {
    console.log(req.body);
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err });
        if (!user) return res.status(404).send({ message: "No Existe el usuario" });
        console.log(user, err);
        req.user = res.status(200).send({
            message: "logueado correctamente",
            token: service.createToken(user)
        });
    });
    /*   User.findOne({ email: req.body.email }).select('+password').exec((err, user) => {
                  console.log('findone', user)
                  if (err) return res.status(500).send({ message: err });
                  if (!user) return res.status(404).send({ message: "No Existe el usuario" });
                  if (service.comparaPassSync(user.password, user.hash)) {
                      req.user = res.status(200).send({
                          message: "logueado correctamente",
                          token: service.createToken(user)
                      })
                  } else {
                      return res.status(401).send({ message: "Usuario no autorizado" });
                  }
              }) */
    /*  User.find({ email: req.body.email }, (err, user) => {
             if (err) return res.status(500).send({ message: err });
             if (!user) return res.status(404).send({ message: "No Existe el usuario" });
             req.user = res.status(200).send({
                 message: "logueado correctamente",
                 token: service.createToken(user)
             });

         }); */
}
module.exports = { signUp, signIn };