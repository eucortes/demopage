"use strict";
let Project = require("../models/project");
let fs = require("fs");
let path = require('path')
let controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: "soy home de project"
        });
    },
    test: function(req, res) {
        return res.status(200).send({
            message: "soy el método o acción test del controlador de project"
        });
    },
    saveProject: function(req, res) {
        let project = new Project();
        let params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err)
                return res.status(500).send({ message: "Error al Guardar documento" });
            if (!projectStored)
                return res
                    .status(404)
                    .send({ message: "no se ha podido guardar el proyecto" });

            return res.status(200).send({ project: projectStored });
        });
    },
    getProject: function(req, res) {
        let projectId = req.params.id;
        if (!projectId)
            return res.status(404).send({ message: "Proyecto no existe" });
        if (projectId == null)
            return res.status(404).send({ message: "Proyecto no existe" });
        Project.findById(projectId, (err, project) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "error al devolver los datos", err });
            if (!project)
                return res.status(404).send({ message: "Proyecto no existe" });
            return res.status(200).send({ project });
        });
    },
    getProjects: function(req, res) {
        Project.find({}).exec((err, projects) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "error al devolver los datos", err });
            if (!projects)
                return res
                    .status(404)
                    .send({ message: "No hay Proyectos para mostrar" });
            return res.status(200).send({ projects });
        });
    },
    updateProject: function(req, res) {
        let projectId = req.params.id;
        let update = req.body;
        Project.findByIdAndUpdate(
            projectId,
            update, { new: true },
            (err, projectUpdated) => {
                if (err)
                    return res
                        .status(500)
                        .send({ message: "error al editar los datos", err });
                if (!projectUpdated)
                    return res.status(404).send({ message: "Proyecto no existe" });
                return res.status(200).send({ project: projectUpdated });
            }
        );
    },
    deleteProject: function(req, res) {
        let projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: "error al borrar los datos", err });
            if (!projectRemoved)
                return res.status(404).send({ message: "Proyecto no existe" });
            return res.status(200).send({ project: projectRemoved });
        });
    },
    uploadImage: function(req, res) {
        let projectId = req.params.id;
        let fileName = "imagen no subida...";
        if (req.files) {
            let filePath = req.files.image.path;
            let fileSplit = filePath.split("\\");
            fileName = fileSplit[1];
            let fileExt = fileName.split(".")[1];
            if (
                fileExt == "png" ||
                fileExt == "jpg" ||
                fileExt == "jpeg" ||
                fileExt == "gif"
            ) {
                Project.findByIdAndUpdate(
                    projectId, { image: fileName }, { new: true },
                    (err, projectUpdated) => {
                        if (err)
                            return res
                                .status(500)
                                .send({ message: "error al actualizar la imagen", err });
                        if (!projectUpdated)
                            return res.status(404).send({ message: "Proyecto no existe" });

                        return res.status(200).send({
                            project: projectUpdated
                        });
                    }
                );
            } else {
                fs.unlink(filePath, err => {
                    /*     if (err)
      return res
        .status(500)
        .send({ message: "error al borrar archivo er", err }); */

                    return res
                        .status(400)
                        .send({ message: "la Extensión de la imagen no es válida" });
                });
            }
        } else {
            return res.status(500).send({ message: "imagen no subida", err });
        }
    },
    getImageFile: function(req, res) {
        let file = req.params.image;
        let path_file = './uploads/' + file;
        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(300).send({ message: 'no existe la imagen' })
            }
        });
    }
};
module.exports = controller;