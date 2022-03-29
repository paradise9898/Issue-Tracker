const User = require('../models/UserIssue')

class UserIssueController{
    async aregistration(req, res) {
        try {
            const {Username, Issue, Date, } = req.body
            
            const Admins = new User({Username, Issue, Date })

            await Admins.save()
            return res.json({message: 'Delivered'})


            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = new UserIssueController();