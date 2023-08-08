const express = require('express')

const userControllers = require('../controllers/user')

const router = express.Router()

router.post('/register',()=> userControllers.registerUser)

router.post('/update-user-details',()=>  userControllers.updateUserDetails)

router.get('/get-user-details',()=>  userControllers.getUserDetails)

module.exports = router