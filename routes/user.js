const express = require('express');
const router = express.Router()
// //from controller 1st to test
// const {sayHi} = require('../controllers/user')

// //see controller for logic
// router.get('/', sayHi);

const {requireSignin} = require("../controllers/auth")


//from controller
const {userById} = require('../controllers/user');

//see controller for logic

router.get('/secret/:userId', requireSignin, (req, res)=>{
    res.json({
        user:req.profile
    })
})

router.param('userId', userById)



module.exports = router;