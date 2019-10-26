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

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'Error al Guardar documento' });
            if (!projectStored) return res.status(404).send({ message: 'no se ha podido guardar el proyecto' })

            return res.status(200).send({ project: projectStored })
        });

    }

        getProject: function(req, res) {
        projectId = req.params.id;
        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send { message: 'error al devolver los datos' }
            if (!project) return res.status(404).send { message: 'Proyecto no existe' }
            return res.status(200).send({ project })
        })
    }
}
module.exports = controller