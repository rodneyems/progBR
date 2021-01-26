const mongoose = require('mongoose')
const userController = require('../controllers/userControllers')

const userSchema = mongoose.Schema({
    name:{ type: String, required:true, min:3, max:50 },
    email:{ type: String, required:true, min:3, max:100 },
    password:{ type: String, required:true, min:6, max:50 },
    createdAt:{ type: Date, default: Date.now },
    admin:{ type: Boolean, default: false },
})

module.exports = mongoose.model('User', userSchema)