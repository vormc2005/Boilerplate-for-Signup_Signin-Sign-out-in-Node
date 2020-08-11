const express = require('express');
const router = express.Router()
// //from controller 1st to test
// const {sayHi} = require('../controllers/user')

// //see controller for logic
// router.get('/', sayHi);


//from controller
const {signup, signin, signout} = require('../controllers/user')
const {userSignupValidator} = require('../validator/index')

//see controller for logic
router.post('/signup', userSignupValidator, signup);
router.post('/signin',  signin);
router.get('/signout',  signout);


module.exports = router;