const express = require('express');

const port = 3001;

const app = express();
const path = require('path');
const db = require('../databases/index.js')

app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/photos/:listingId', function (req, res) {
  console.log(req.params.listingId)
  db.returnListing(Number(req.params.listingId), function(err, data) {
    if (err) {
      throw (err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
})
