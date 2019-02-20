const express = require('express');

const port = 3000;

const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
})
