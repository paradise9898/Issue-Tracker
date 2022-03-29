const Router = require('express')
const router = Router()
const controller = require('./UserIssueController')

router.post('/userissue', controller.issues)

module.exports = router
