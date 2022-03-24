const User = require('../models/Users')

class UsersController {
    async registration(req, res) {
        try {
            const {Name, Surname, Email, Password} = req.body
            
            const Users = new User({Name, Surname, Email, Password})

            await Users.save()
            return res.json({message: 'Registrated'})


            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = new UsersController();