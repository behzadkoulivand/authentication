const express = require('express');

const connectDB = require('./config/db');

connectDB();

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})