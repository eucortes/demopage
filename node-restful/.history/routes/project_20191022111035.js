'use strict'
let express = require('express')
let ProjectController = require('../controller/project')
const AuthMiddleware = require('../middlewares/auth')
    //let auth = require('../middlewares/auth')

let router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test)
router.post('/save-project', ProjectController.saveProject)
router.get('/private', AuthMiddleware.isAuth, ProjectController.test)
    // function(req, res) {
    //    res.status(200).send({ message: 'tienes acceso' })
    //})

module.exports = router;