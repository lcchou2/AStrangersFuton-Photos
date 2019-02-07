const express = require('express');
const app = express();
const path = require('path');
const port = 3004;

app.use(express.static(path.join(__dirname, '../client')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))