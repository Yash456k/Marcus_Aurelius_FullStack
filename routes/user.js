const express = require('express')
const router = express();
const {handleUserLogin, handleUserSignup} = require('../controllers/user')

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/',(req,res)=>{
    res.render('signup');
})


router.post('/login',handleUserLogin);
router.post('/signup',handleUserSignup);

module.exports = router;