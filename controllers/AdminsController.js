const User = require('../models/Admins')

class AdminsController {
    async aregistration(req, res) {
        try {
            const {Name, Surname, Email, Password} = req.body
            
            const Admins = new User({Name, Surname, Email, Password})

            await Admins.save()
            return res.json({message: 'Registrated'})


            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = new AdminsController();