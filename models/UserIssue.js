const mongoose = require('mongoose')
const schema = mongoose.Schema
const mongo = require('mongodb')

const UserIssue = new schema({
    Username:{type: "String"},
    Issue:{type: "String"},
    Date:{type: "String"},
    
})

mongo.ObjectId.toString

module.exports = mongoose.model('UserIssue', UserIssue)
