const Router = require('express')
const router = Router()
const controller = require('./AdminsController')

router.post('/adminsregistration', controller.aregistration)
module.exports = router