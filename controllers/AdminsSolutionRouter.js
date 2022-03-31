const Router = require('express')
const router = Router()
const controller = require('./AdminsSolutionController')

router.post('/adminssolutions', controller.adminsolution)
module.exports = router