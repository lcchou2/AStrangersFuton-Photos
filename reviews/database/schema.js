var mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
  listingId: Number,
  rating: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number, 
  checkin: Number,
  value: Number,
  reviews: [{
    name: String,
    profile: String,
    month: String,
    year: Number,
    review: String
  }]
})

module.exports = reviewsSchema;