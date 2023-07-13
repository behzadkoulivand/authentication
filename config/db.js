const mongoose = require('mongoose');

const MONGOURI = "mongodb://localhost:27017/authdb";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("MongoDB Conected!");
    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = connectDB;