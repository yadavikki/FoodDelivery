const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vikki:vikki123@cluster0.ylpsr1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try { 
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};

module.exports = mongoDB;
