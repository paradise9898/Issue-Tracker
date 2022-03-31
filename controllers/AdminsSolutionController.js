const ADSOL = require('../models/AdminSolutions')

class AdminsSolutionsController {
    async adminsolution(req, res) {
        try {
            const {Solutions} = req.body
            
            const AdminsSols = new ADSOL({Solutions})

            await AdminsSols.save()
            return res.json({message: 'delivered'})


            
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = new AdminsSolutionsController();