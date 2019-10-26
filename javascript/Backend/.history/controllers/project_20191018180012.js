'use strict'
let Project = require('../models/project');
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
        let params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null
        return res.status(200).send({
            project: project,
            metodo: 'save project'
        })
    }


}
module.exports = controller