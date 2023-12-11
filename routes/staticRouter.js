require("dotenv").config();
const express=require("express");
const router = express();
const collection = require("../routes/mongodb");
const bcrypt = require("bcrypt");
const {restrictToLoggedinUserOnly} = require('../middleware/auth')

router.get('/',(req,res)=>{
    
    const Name = req.user;
    if(!Name) 
    res.render('home',{name:"some error ?"});
    else
    res.render("home",{name : Name.name});

    
})


router.post('/quote', (req,res)=>{

    console.log(req.body.quoteNo);


    
})

router.get('/bookmarks',restrictToLoggedinUserOnly,(req,res)=>{

    res.render('bookmarks')
})








module.exports = router



