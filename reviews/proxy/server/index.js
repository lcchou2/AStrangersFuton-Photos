var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'));