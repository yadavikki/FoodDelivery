const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vikki:vikki123@cluster0.ylpsr1m.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Fetch data from the collection
        const fetched_data = await mongoose.connection.db.collection("food_itam").find({}).toArray(function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });
         //console.log("Fetched Data:", fetched_data);
        
        // // Additional logging to verify collection names
        // const collections = await mongoose.connection.db.listCollections().toArray();
        // console.log("Collections in the database:", collections.map(col => col.name));
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data", error);
    }
};

// Export the function
module.exports = mongoDB;
