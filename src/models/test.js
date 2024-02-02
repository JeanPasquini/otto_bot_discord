const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    
    id: Number,
    text: String
});

module.exports = mongoose.model('Texto', textSchema);