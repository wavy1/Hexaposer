var express = require('express');
var exec = require('child_process').execFile;
var colorConv = require('./static/js/colorDefine.js');

var app = express();
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

app.use(express.static('static'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));


console.log("Start ImageProcessor");
exec('../hexposer_image_processor/cmake-build-debug/hextractor.exe', function(err, data) {
		console.log(err);
		console.log(data.toString());
})

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
    //Übergabe des .json Arrays an die dynamic_view
    hexArr : colorConv.getHexagons()
   });
});



var server = app.listen(3000);