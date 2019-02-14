var express = require('express');
var app = express();

var path = require('path');
var db = require('../database/index.js');

app.set('port', 3003);
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'));


app.get('/api/reviews/:listingId', function (req, res) {
  console.log(req.params.listingId)
  db.returnListing(Number(req.params.listingId), function(err, data) {
    if (err) {
      throw (err);
    } else {
      res.send(data);
    }
  });
});