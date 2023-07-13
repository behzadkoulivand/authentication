const mongoose = require('mongoose');

const MONGOURI = "mongodb://localhost:27017/authdb";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Conected!");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;