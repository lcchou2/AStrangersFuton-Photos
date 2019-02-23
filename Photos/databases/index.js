var mongoose = require('mongoose');
var photos = require('./schema.js');
mongoose.connect('mongodb://172.17.0.2:27017/newnewnew');
// mongoose.connect('mongodb://localhost/newnew');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to Mongo')
});


const Photos = mongoose.model('Photos', photos);

var saveListings = (arr, callback) => {
  Photos.insertMany(arr, callback);
}

var returnListing = (listingId, callback) => {
  Photos.find({listingId: listingId}, '-_id -reviews._id -__v', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  })
}


module.exports = {
  saveListings,
  returnListing
};