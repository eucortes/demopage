'use strict'
let express = require('express')
let ProjectController = require('../controllers/project')

let router = express.routes();
router.get('./home', ProjectController.home);
router.post('/test', ProjectController.test)

module.exports = app;