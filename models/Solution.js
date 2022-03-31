const mongoose = require('mongoose')
const schema = mongoose.Schema

const Solution = new schema({
    Solutions:{type: "String"}
})

module.exports = mongoose.model('Solution', Solution)
