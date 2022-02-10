const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const router = express.Router()
const jwt = require('jsonwebtoken')
const oauthService = require('../service/oauthService')
const validateRequestSchema = require('../middleware/validateRequestSchema')
const registerSchema = require('../schema/registerSchema')
const verify = require('../paymentHubApi/paymentHubApi')

router.post('/register', validateRequestSchema(registerSchema) , ( req, res , next ) => {
    const { body } = req
    oauthService.create(body)
    .then(() => res.json())
    .catch((err) => next(err))
    
})

// router.post('/login', validateRequestSchema(registerSchema) , (req,res,next) => {
router.post('/login', (req,res,next) => {

    // const { body } = req
    // console.log(req.body)
    // verify(req.body)
    oauthService.login(req.body)
    .then(data => res.json(data))
    .catch(err => next(err))
    // oauthService.login(body) 
    // .then(user => res.json(user))
    // .catch((err) => next(err))
})

module.exports = router