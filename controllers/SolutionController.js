const Sol = require ('../models/Solution')

class SolutionController {
    async solution(req, res) {
        try {
        
            const {Solutions} = req.body
            const solution =  new Sol({Solutions})


            await solution.save()
            return res.json({message: 'solution delivered'})

    } catch (error) {
        console.log(error);
    }

}
}


module.exports = new SolutionController();