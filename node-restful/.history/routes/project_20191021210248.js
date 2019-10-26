'use strict'
let express = require('express')
let ProjectController = require('../controller/project')

let router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test)
router.post('/save-project', ProjectController.saveProject)

module.exports = router;