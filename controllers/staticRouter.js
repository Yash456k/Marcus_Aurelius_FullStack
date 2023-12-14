const collection = require("../routes/mongodb");



async function ReturnUserQuoteArray(req,res) {
    let responseData=null;
    if(req.user)
    {
        const User = await collection.findOne({name:req.user.name})
        console.log(User.quotesViewed);
        responseData = {quotesViewed:User.quotesViewed}
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

async function storeQuoteInDB(req, res) {
    console.log(req.body.quoteNo);
    const quoteNumber = req.body.quoteNo;

    try {
        if (req.user) {
            await collection.findOneAndUpdate(
                { name: req.user.name },
                {
                    $push: {
                        quotesViewed: quoteNumber
                    }
                }
            );

            console.log("User push successful");
            res.status(200).send("Quote stored successfully");
        } else {
            // Handle the case where there is no user
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        console.error("Error storing quote:", error);
        res.status(500).send("Internal Server Error");
    }
}


async function storeBookmarkForUser(req, res) {
    console.log("inside store bookmark user");
    try {
        const User = req.user;
        console.log("current quote no=" + req.body.currentQuote);

        const userCollection = await collection.findOne({ name: User.name });

        const currentQuote = parseInt(req.body.currentQuote);

        if (userCollection.bookmarks.includes(currentQuote)) {

            await collection.findOneAndUpdate(
                { name: User.name },
                {
                    $pull: {
                        bookmarks: currentQuote,
                    },
                }
            );
            console.log("Quote removed from bookmarks");
        } else {

            await collection.findOneAndUpdate(
                { name: User.name },
                {
                    $push: {
                        bookmarks: currentQuote,
                    },
                }
            );
            console.log("Quote added to bookmarks");
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    ReturnUserQuoteArray,
    refreshQuotes,
    storeQuoteInDB,
    storeBookmarkForUser
}