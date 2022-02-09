const expressJwt = require('express-jwt')
require('dotenv').config()
const userService = require('../service/userService')

module.exports = jwt;

function jwt() {
    const secret = process.env.TOKEN_SECRECT
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/oauth/register',
            '/oauth/login'

        ]
    });
}

async function isRevoked(req, payload, done) {

    const user = await userService.getByUsername(payload.username)
    // console.log('===user===',user.roles )
    // // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    // req.identity.permissions = user.roles
    req.permissions = user.roles
    const userRequest = req.user

    req.userInfo = {
        username: user.username,
        roles: user.roles
    }
    // req.user = {
    //     ...userRequest,
    //     permissions: user.roles
    // }

    done();
}
