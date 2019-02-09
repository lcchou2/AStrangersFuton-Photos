const mongoose = require('mongoose');

const photos = new mongoose.Schema({
  photoId: Number,
  url: String,
  isHeader: Boolean,
  listingId: Number, // 1-100
  description: String
});

module.exports = photos