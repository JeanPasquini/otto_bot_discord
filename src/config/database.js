const mongoose = require('mongoose');
const { MONGODBURL } = require("../../config.json");

const mongodbURL = MONGODBURL;

class Database {
    constructor() {
        this.connection = null;
    }

    async connect() {
        if (!mongodbURL) return;

        try {
            await mongoose.connect(mongodbURL, {
                //keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("MongoDB Connected!");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error.message);
        }
    }
}

module.exports = Database; // Export an instance of the Database class