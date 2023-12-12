const collection = require("../routes/mongodb");



async function ReturnUserQuoteArray(req,res) {
    let responseData=null;
    if(req.user)
    {
        const User = await collection.findOne({name:req.user.name})
        console.log(User.quotesViewed);
        responseData = {quotes:User.quotesViewed}
    }
    else{
    responseData=null;
    }
    return res.json(responseData);
}

async function refreshQuotes(req,res) {
    try {
        console.log("inside refresh try catch")
        await collection.findOneAndUpdate({name:req.user.name},{
            $set: { quotesViewed: [] } 
            
        })
        console.log('set successful')
    } catch (error) {
        console.log("error in refreshing quotes")
    }
    res.redirect('/');
}

async function storeQuoteInDB(req,res) {
    console.log(req.body.quoteNo);
    const quoteNumber = req.body.quoteNo;
    if(req.user)
    {  
        const user =  await collection.findOneAndUpdate({
            name:req.user.name
        },{
            $push:{
                quotesViewed:quoteNumber
            }
        })
        console.log("user push successful")
    }
}

module.exports = {
    ReturnUserQuoteArray,
    refreshQuotes,
    storeQuoteInDB
}