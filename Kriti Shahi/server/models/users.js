const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    location: String,
    skils: String,
    about_yourself: String 
})

module.exports = mongoose.model('users',userSchema,'users')
