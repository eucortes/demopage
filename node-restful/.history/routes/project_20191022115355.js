'use strict'
let express = require('express')
let ProjectController = require('../controller/project')
let Auth = require('../middlewares/auth')

//ProjectController.auth(req, res, next)
let router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test)
router.post('/save-project', ProjectController.saveProject)
router.get('/private', Auth, ProjectController.test)
    // function(req, res) {
    //    res.status(200).send({ message: 'tienes acceso' })
    //})

module.exports = router;