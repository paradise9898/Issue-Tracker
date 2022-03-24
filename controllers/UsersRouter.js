const Router = require('express')
const router = Router()
const controller = require('./UsersController')

router.post('/Usersregistration', controller.registration)

module.exports = router