var express = require('express');
var addon = require('bindings')('ImageProcessor');
var app = express();

console.log(addon.hello());
app.use(express.static('static'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));

var server = app.listen(5000);