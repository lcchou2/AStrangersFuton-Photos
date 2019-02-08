const express = require('express');

const port = 3001;

const app = express();
const path = require('path');
const {returnAll} = require('../databases/seeding.js')

app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/photos', (req, res) => {
  console.log('got all of them!!')
  returnAll((err, document) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(document);
  });
});

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
})
