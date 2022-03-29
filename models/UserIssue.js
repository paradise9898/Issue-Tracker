const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserIssue = new schema({
    Username:{type: "String"},
    Issue:{type: "String"},
    Date:{type: "Date"},
    
})

module.exports = mongoose.model('UserIssue', UserIssue)
