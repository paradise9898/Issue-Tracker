const mongoose = require('mongoose')
const schema = mongoose.Schema

const AdminSolution = new schema({
    Solutions: {type: "String"}
})

module.exports = mongoose.model('AdminSolutions', AdminSolution)