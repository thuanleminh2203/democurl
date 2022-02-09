const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../config/dbConfig')
const User = db.User

async function create( req ){
    const { username, password } = req

    if( await User.findOne({username: new RegExp('^'+username+'$', "i")}))
      throw 'Username "' + userParam.username + '" is already taken'

      const user = new User({
          username,
          password: bcrypt.hashSync(password)
      })
    
      await user.save()
}

module.exports = {
    create
}