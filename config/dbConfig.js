const mongoose = require('mongoose')

const connectionOptions = { useNewUrlParser: true } 
mongoose.connect('mongodb://localhost:27017/thuan', connectionOptions , (err) =>{
    if(!err)
        console.log('MongoDB Connection Success')
    else
        console.log('Err in Db Connection ' + err)
})


module.exports = {
    User: require('../entity/user')
};