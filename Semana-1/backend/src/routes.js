const { Router } = require('express')
const apiRes = require('./api')

const routes = Router()

routes.get('/users', apiRes.index)

module.exports = routes