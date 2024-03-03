const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    name: String,
    email: String,
})
 const AdminUser = mongoose.model('users', userSchema)
 module.exports = AdminUser