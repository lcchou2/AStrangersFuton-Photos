var data = require('./data.js');
var db = require('./index.js');


function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var generateReviews = function(id, name, profile, month, year, review) {
  var obj = {
    reviewId: id,
    name: name,
    profile: profile,
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
  for (var i = 1; i <= index; i++) {
    var name = data.name[getRndInt(0, 19)];
    var profile = data.profile[getRndInt(0, 19)];
    var month = data.month[getRndInt(0, 11)];
    var year = data.year[getRndInt(0, 1)];
    var review = data.review[getRndInt(0, 19)];

    reviews.push(generateReviews(i, name, profile, month, year, review));
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

db.saveListings(dataArr, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('saved to database', data);
  }
});