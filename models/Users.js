const mongoose = require('mongoose')
const schema = mongoose.Schema

const Users = new schema({
    Name:{type: "String"},
    Surname:{type: "String"},
    Email:{type: "String"},
    Password:{type: "String"}
})

module.exports = mongoose.model('Users', Users)
