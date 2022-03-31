const Router = require('express')
const router = new Router()
const controller = require('../controllers/SolutionController')

router.post('/solution', controller.solution )

module.exports = router