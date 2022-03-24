const Router = require('express')
const router = Router()
const controller = require('./authController')

router.post('/registration', controller.registration)

module.exports = router