const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email: String,
    phoneNumber : Number
})
 const User = mongoose.model('users1', userSchema)
 module.exports = User