const express = require('express')
const router = express();
const {handleUserLogin, handleUserSignup, handleUserLogout} = require('../controllers/user')
const {restrictToNotLoggedInUserOnly} = require('../middleware/auth')

router.get('/login',restrictToNotLoggedInUserOnly,(req,res)=>{
    res.render('login');
})

router.get('/signup',restrictToNotLoggedInUserOnly,(req,res)=>{
    res.render('signup');
})


router.post('/login',handleUserLogin);
router.post('/signup',handleUserSignup);
router.post('/logout',handleUserLogout);

module.exports = router;