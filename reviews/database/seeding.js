var data = require('./data.js');

var mongoose = require('mongoose');
var reviewsSchema = require('./schema.js');
mongoose.connect('mongodb://localhost/testReviews');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});


function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var generateReviews = function(name, month, year, review) {
  var obj = {
    name: name,
    profile: "http://i.pravatar.cc/100",
    month: month,
    year: year,
    review: review
  }
  return obj;
}

var generateListings = function(id) {
  var ratings = [getRndInt(1, 5), getRndInt(1, 5), getRndInt(1, 5), getRndInt(1, 5), getRndInt(1, 5), getRndInt(1, 5)];
  var totalRating = 0;
  for (var i = 0; i < ratings.length; i++) {
    totalRating += ratings[i];
  }
  var aveRating = totalRating / 6;

  var reviews = [];
  var index = getRndInt(1, 20);
  for (var i = 0; i < index; i++) {
    var name = data.name[getRndInt(0, 19)];
    var month = data.month[getRndInt(0, 11)];
    var year = data.year[getRndInt(0, 1)];
    var review = data.review[getRndInt(0, 19)];

    reviews.push(generateReviews(name, month, year, review));
  }

  var obj = {
    listingId: id,
    rating: aveRating,
    accuracy: ratings[0],
    communication: ratings[1],
    cleanliness: ratings[2],
    location: ratings[3], 
    checkin: ratings[4],
    value: ratings[5],
    reviews: reviews
  }
  return obj;
}

var dataArr = [];
for (var i = 1; i <= 100; i++) {
  dataArr.push(generateListings(i));
}



var Reviews = mongoose.model('Reviews', reviewsSchema);

Reviews.insertMany(dataArr, {ordered: false}, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('result:', result);
  }
});


var returnAll = (callback) => {
  Reviews.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('data', data);
      callback(null, data);
    }
  })
}

module.exports = {
  returnAll
};
