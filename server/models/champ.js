let mongoose = require('mongoose');

// create a book model
let ChampModel = mongoose.Schema({
    Name: String,
    Region: String,
    Role: String,
    Title: String,
    Price: Number
    },
    {
        collection: "champs"
    }
);
module.exports = mongoose.model('Champ', ChampModel);