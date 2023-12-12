require("dotenv").config();
const express=require("express");
const router = express();

const {restrictToLoggedinUserOnly} = require('../middleware/auth')
const { refreshQuotes, storeQuoteInDB, ReturnUserQuoteArray} = require('../controllers/staticRouter')

router.get('/',(req,res)=>{
    
    const Name = req.user;
    if(!Name) 
    res.render('home',{name:"some error ?",user:false});
    else
    res.render("home",{name : Name.name,user:true});

    
})

router.get('/user-quote-array',ReturnUserQuoteArray)

router.post("/refresh-quotes",refreshQuotes)

router.post('/quote',storeQuoteInDB)

router.get('/bookmarks',restrictToLoggedinUserOnly,(req,res)=>{

    res.render('bookmarks')
})








module.exports = router



