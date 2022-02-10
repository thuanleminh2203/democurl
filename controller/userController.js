const express = require('express')
const router = express.Router()
const userService = require('../service/userService')
// var guard = require('express-jwt-permissions')()
const authorization = require('../middleware/authorization')

router.get('/', authorization(['USER']),(req,res,next) => {
// router.get('/',guard.check('ADMIN') ,(req,res,next) => {

    userService.getAll()
    .then((users) => res.json(users))
    .catch(err => next(err))
})

module.exports = router