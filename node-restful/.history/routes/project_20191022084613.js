'use strict'
let express = require('express')
let ProjectController = require('../controller/project')
const auth = require('../middlewares/auth')

let router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test)
router.post('/save-project', ProjectController.saveProject)
router.post('/private', auth.isAuth, function(req, res) {
    ProjectController.test(req, res)
})

module.exports = router;