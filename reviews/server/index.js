var express = require('express');
var app = express();

var path = require('path');
var db = require('../database/index.js');

app.set('port', 3003);
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'));


app.post('/api/reviews', function (req, res) {
  db.returnListing(req.body.listingId, function(err, data) {
    if (err) {
      throw (err);
    } else {
      console.log('data---', data)
      res.send(data);
    }
  });
});