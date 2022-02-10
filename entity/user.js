const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId

const userSchema = new mongoose.Schema({
    id: ObjectId,
    cif: String,
    fullname: String,
    dob: Date ,
    idCardNo: String ,
    mobile: String,
    email: String,
    createdAt : {
        type: Date,
        default: new Date()
    }
    // username: String,
    // password: String,
    // roles: [{type: String}]
})

mongoose.model('user', userSchema) 