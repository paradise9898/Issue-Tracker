const User = require('../models/UserIssue')

class UserIssueController{
    async issues(req, res) {
        try {
            const {Username, Issue, Date } = req.body
            
            const UserIssue = new User({Username, Issue, Date })

            await UserIssue.save()
            return res.json({message: 'Delivered'})


            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = new UserIssueController();