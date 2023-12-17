const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Quotes Mongo Connected");
    })
    .catch((error) => {
        console.log("ERROR: MongoDB not connected", error);
    });
        // Check if the model already exists
        // Model doesn't exist, create it
        const QuotesSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            quote: {
                type: [String],
                required: true
            }
        });

        // Create the model
        const quoteCollection = new mongoose.model("MarcusQuotes", QuotesSchema);

        async function checkIfMultiple() {
            const check = await quoteCollection.findOne({ name: "QuotesAccess" });
            if (!check) {
                const quotes = [
                    // ... your quotes array
                ];

                // Create a document with the quotes array
                const data = {
                    name: "QuotesAccess",
                    quote: quotes
                };

                // Insert the document into the database
                quoteCollection.insertMany(data)
                    .then((result) => {
                        console.log("Quotes inserted into the database successfully");
                    })
                    .catch((err) => {
                        console.log('some error occurred in creating model');
                        console.log(err);
                    });
            }
        }

        checkIfMultiple();
        // Replace this array with your actual quotes
        
        module.exports = {quoteCollection}; // Move the export statement here
    
