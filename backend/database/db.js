
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Connection = () => {
    dotenv.config();
 
    const URL = process.env.MONGODB_URL;

    mongoose.connect(URL).then(() => {
        console.log("Database Connected!!!");
    }).catch((err) => {
        console.log("Error while connecting with database", err);
    });
};

module.exports = Connection;