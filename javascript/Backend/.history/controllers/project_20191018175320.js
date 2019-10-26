'use strict'
let Project = require('../models/project')
let controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'soy home de project'
        })
    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'soy el método o acción test del controlador de project'
        })
    },
    saveProject: function(req, res) {
        let project = new Project();
        return res.status(200).send({
            metodo: 'save project'
        })
    }


}
module.exports = controller