const Router = require('express')
const router = Router()
const controller = require('./UserIssueController')

router.post('/userissue', controller.UserIssueController)

module.exports = router