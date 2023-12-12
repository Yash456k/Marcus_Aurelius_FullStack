const express = require('express')
const router = express();
const {handleUserLogin, handleUserSignup, handleUserLogout} = require('../controllers/user')

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/',(req,res)=>{
    res.render('signup');
})


router.post('/login',handleUserLogin);
router.post('/signup',handleUserSignup);
router.post('/logout',handleUserLogout);

module.exports = router;