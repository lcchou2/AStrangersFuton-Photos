var express = require('express');
var app = express();

var path = require('path');

app.set('port', 3003);

app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'));