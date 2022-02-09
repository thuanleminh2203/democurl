const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId

const userSchema = new mongoose.Schema({
    id: ObjectId,
    username: String,
    password: String
})

mongoose.model('user', userSchema)