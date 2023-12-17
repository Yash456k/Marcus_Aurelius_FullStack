const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Mongo Connected");
    })
    .catch(()=>{
        console.log("ERROR : MongoDB not connected");
    })


    const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        quotesViewed:{
            type:[Number],
            require:false
        },
        bookmarks:{
            type:[Number],
            require:false,
        }

    })


    const collection = new mongoose.model("MarcusLoginCollection",UserSchema)

    module.exports=collection