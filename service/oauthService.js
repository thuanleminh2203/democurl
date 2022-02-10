const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const verify = require('../paymentHubApi/paymentHubApi')

async function create( req ){
    const { username, password } = req

    if( await User.findOne({username: new RegExp('^'+username+'$', "i")}))
      throw 'Username ' + username + ' is already taken!'

      const user = new User({
          username,
          password: bcrypt.hashSync(password),
          roles: ['ADMIN']
      })
    
      await user.save()
}

async function login(body){
    // const { username, password } = req
    const dataPaymentHub = await verify(body)
    const { cif,fullname,dob ,idCardNo ,mobile,email } = dataPaymentHub

    const user = await User.findOne({cif})

    if(!user){
        const userEntity = new User({
            cif,fullname,dob ,idCardNo ,mobile,email
        })
        userEntity.save()
    }
       


    // const user = await User.findOne({username: new RegExp('^'+username+'$', "i")})

    // if(!user || !bcrypt.compareSync(password, user.password) )
    //     throw 'User info not exactly!'
    
    // const token = genarateToken({id: user.id ,username})

    // const refreshToken = generateRefreshToken({id: user.id ,username})
    
    // return {
    //     username,
    //     token,
    //     refreshToken
    // }

}

// async function login(req){
//     const { username, password } = req

//     const user = await User.findOne({username: new RegExp('^'+username+'$', "i")})

//     if(!user || !bcrypt.compareSync(password, user.password) )
//         throw 'User info not exactly!'
    
//     const token = genarateToken({id: user.id ,username})

//     const refreshToken = generateRefreshToken({id: user.id ,username})
    
//     return {
//         username,
//         token,
//         refreshToken
//     }

// }

function genarateToken(user){
    return jwt.sign(user, process.env.TOKEN_SECRECT, {expiresIn: '5000s'})
}

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRECT)
}

module.exports = {
    create,
    login
}