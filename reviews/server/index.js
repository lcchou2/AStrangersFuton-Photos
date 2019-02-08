var express = require('express');
var app = express();

var path = require('path');
var {returnAll} = require('../database/seeding.js');

app.set('port', 3003);

app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'));


app.get('/api/reviews', function (req, res) {
  returnAll(function(err, data) {
    if (err) {
      throw (err);
    } else {
      res.send(data);
    }
  });
});