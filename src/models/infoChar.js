const mongoose = require('mongoose');

const infoCharSchema = new mongoose.Schema({   
    nameChar: String,
    ageChar: Number,
    classChar: String,
    storyChar: String 
});

module.exports = mongoose.model('infoChar', infoCharSchema);