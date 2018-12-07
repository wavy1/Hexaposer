var express = require('express');
var app = express();
var fs = require('fs');

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

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
// next passing hexagons into pug

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      
      //Hier müssten die .json Daten einfließen
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});


app.listen(3000);