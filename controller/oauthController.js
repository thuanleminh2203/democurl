const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const router = express.Router()
const jwt = require('jsonwebtoken')
const oauthService = require('../service/oauthService')

router.post('/login', (req,res) => {
    const { body } = req
    const { username,password } = body


    res.json('example text')
})

router.post('/register', (req,res , next ) => {
    const { body } = req
    oauthService.create(body)
    .then(() => res.json({}))
    .catch((err) => next(err))
    
})

function genarateToken(user){
    return jwt.sign(user, process.env.TOKEN_SECRECT, {expiresIn: '5000s'})
}

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRECT)
}

module.exports = router