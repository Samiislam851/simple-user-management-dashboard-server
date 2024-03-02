const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email: String,
    phoneNumber : Number,
    isBlocked : {type : Boolean, default : false}
})
 const User = mongoose.model('users1', userSchema)
 module.exports = User