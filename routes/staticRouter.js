require("dotenv").config();
const express=require("express");
const router = express();

const {restrictToLoggedinUserOnly} = require('../middleware/auth')
const { refreshQuotes, storeQuoteInDB, ReturnUserQuoteArray, storeBookmarkForUser} = require('../controllers/staticRouter')
const {quoteCollection} = require('../model/quotes')
const {collection} = require('../model/mongodb')

router.get('/',(req,res)=>{
    
    const Name = req.user;
    if(!Name) 
    res.render('home',{user:false});
    else
    res.render("home",{name : Name.name,user:true});

})

router.get('/user-quote-array',ReturnUserQuoteArray)

router.post("/refresh-quotes",refreshQuotes)

router.post('/quote',storeQuoteInDB)

router.post('/bookmark-quote',storeBookmarkForUser)



router.get('/bookmarks', restrictToLoggedinUserOnly, async (req, res) => {
    try {
        // Assuming req.user contains the current logged-in user
        // Find the user by name in the User model
        const user = await collection.findOne({ name: req.user.name });

        if (!user) {
            // Handle case where user is not found
            return res.status(404).send('User not found');
        }

        // Get the user's bookmarks
        const bookmarks = user.bookmarks;

        // Find quotes corresponding to the bookmarked numbers in the Quote model
        const JustQuotes = await quoteCollection.findOne({ name: "QuotesAccess" });
         allQuotes = JustQuotes.quote

    console.log("All quotes length:", allQuotes.length);

// ...

if (allQuotes) {
  const bookmarkedQuotes = bookmarks.map((bookmarkIndex) => allQuotes[bookmarkIndex]).filter(Boolean);


  if (bookmarkedQuotes.length > 0) {
    const quotesWithIds = bookmarkedQuotes.map((quote, index) => ({
      id: index, // Assuming the index is the quote ID
      content: quote,
    }));

    res.render('bookmarks', { quotes: quotesWithIds });
  } else {
    console.log('No bookmarked quotes found');
    res.render('bookmarks', { quotes: [] });
  }
} else {
  console.log('No quotes found');
  res.render('bookmarks', { quotes: [] });
}

// ...


    } catch (error) {
        console.error('Error fetching bookmarks:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/bookmarkDelete', async (req, res) => {
  console.log("ID OF QUOTE ===" + req.body.quoteId);

  const User = req.user;
  console.log("current quote no=" + req.body.currentQuote);

  try {
    // Find the user based on the req.user.name
    const userCollection = await collection.findOne({ name: User.name });

    // Set the element at the specified index to null
    await collection.updateOne(
      { name: User.name },
      { $set: { [`bookmarks.${req.body.quoteId}`]: null } }
    );

    // Remove the null element from the bookmarks array
    await collection.updateOne(
      { name: User.name },
      { $pull: { bookmarks: null } }
    );

    res.redirect('/bookmarks');
  } catch (error) {
    console.error("Error removing bookmark:", error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router



