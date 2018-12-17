var express = require('express');
var app = express();
var fs = require('fs');
var colorConv = require('./static/js/colorDefine.js');

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

app.use(express.static('static'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));


// open json and read to buffer
let myjson = fs.readFileSync('info.json');
// parsing the json data
var test = JSON.parse(myjson);
// creating the hexgons array
var hexagons = [];
// iterating the content from parsed json to the array
for (var i = 0; i < test.Hexagons.length; i++){
  hexagons[i] = test.Hexagons[i];
}

console.log(hexagons);
console.log(colorConv.colorPrepare(hexagons[0].color));

hexagons.forEach.color

//console.log(hexagons);

// next passing hexagons into pug

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      hexArr : hexagons
      //Hier müssten die .json Daten einfließen
         //name: "TutorialsPoint", 
         //url:"http://www.tutorialspoint.com"
   });
});


app.listen(3000);