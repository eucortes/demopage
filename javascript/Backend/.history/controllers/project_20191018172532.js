'use strict'
let controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'soy home de project'
        })
    }
    test: function(req, res) {
        return res.status(200).send({
            message: soy el métido o acción test del controlador de project
        })
    }
}
module.exports = controller