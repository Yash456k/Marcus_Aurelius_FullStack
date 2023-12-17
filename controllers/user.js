require("dotenv").config();
const collection = require("../model/mongodb");
const bcrypt = require("bcrypt");
const {setUser} = require('../service/auth')


async function handleUserLogin(req,res) {
    try{
        const check = await collection.findOne({name:req.body.name})

        if(await bcrypt.compare(req.body.password, check.password))
        {
            const token = setUser(check);
            res.cookie('uid',token)

            return res.redirect('/');
            
        }
        else
        return res.render("login",{error:"Wrong password buddy, try again"});
    }catch(error){
        return res.send("problem logging in")
        
    }
}

async function handleUserSignup(req,res) {
    const hashPass = await bcrypt.hash(req.body.password ,10)
    const data= {
        name:req.body.name,
        password:hashPass,
        quotesViewed:[],
        bookmarks:[]
    };

    await collection.insertMany([data]);

    return res.redirect("/user/login");
}

 function handleUserLogout(req,res) {
    try {
    res.cookie('uid', '', { maxAge: 0 });
    req.user = null;
    return res.redirect('/');
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
    handleUserLogout,
    
}