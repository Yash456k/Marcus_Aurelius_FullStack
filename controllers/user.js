require("dotenv").config();
const collection = require("../routes/mongodb");
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
        return res.send("wrong pass");
    }catch(error){
        return res.send("problem logging in")
        
    }
}

async function handleUserSignup(req,res) {
    const hashPass = await bcrypt.hash(req.body.password ,10)
    const data= {
        name:req.body.name,
        password:hashPass,
        quotesViewed:[]
    };

    await collection.insertMany([data]);

    res.redirect("/");
}

module.exports = {
    handleUserLogin,
    handleUserSignup
}