const express = require('express');
const app = express();
const path = require('path');
const similarModel = require('../database/seeding.js');
const port = 3004;


app.use(express.static(path.join(__dirname, '../client')));
app.get('/similar-listings', function (req, res) {
    similarModel.find({}, function (err, docs) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(docs);
        res.send(docs);
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));