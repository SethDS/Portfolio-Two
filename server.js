/**
 * Created by Seth on 5/5/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(5051, function(){
    console.log('listening on port 5051...')
});