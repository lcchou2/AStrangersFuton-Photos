const mongoose = require('mongoose');
const simSchema = require('./schema.js');
const data = require('./data.js');
mongoose.connect('mongodb://localhost:27017/similar-listings', { useNewUrlParser: true });
var db = mongoose.connection;


var SimilarModel = mongoose.model('SimilarModel', simSchema.similarSchema);

var result = [];

function oneInsertion(listingId) {
    var url = randomChoice(data.url);
    var roomDescription = randomChoice(data.rooomDescription);
    var location = randomChoice(data.location);
    var price = randomChoice(data.price);
    var rating = randomChoice(data.rating);
    var name = randomChoice(data.name);

    var obj = {
        listingId: listingId,
        url: url,
        roomDescription: roomDescription,
        location: location,
        price: price,
        rating: rating,
        name: name
    }
    return obj;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
    return arr[getRndInteger(0, arr.length - 1)];
}

for (var i = 1; i <= 100; i++) {
    result.push(oneInsertion(i));
}
SimilarModel.insertMany(result, function (err, docs) {
    if (err) {
        console.log("err");
    } else {
        console.log(docs);
    }
});

module.exports = SimilarModel;