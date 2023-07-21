const express = require('express');

const sequelize = require('./config/database');

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/user'));

const PORT = process.env.PORT || 3000;

sequelize.sync().then((result) => {
    console.log(result);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => console.log(err));

