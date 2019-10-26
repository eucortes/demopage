'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')
createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix,
        exp: moment().add(14, 'days').unix
    }
}
module.exports = createToken