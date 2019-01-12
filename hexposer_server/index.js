var express = require('express');
var app = express();
var fs = require('fs');
var exec = require('child_process').execFile;
var colorConv = require('./static/js/colorDefine.js');

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');



app.use(express.static('static'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/static/images'));
app.use('/fonts', express.static(__dirname + '/static/fonts'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use('/js', express.static(__dirname + '/static/js'));


var getHexagons = function() {
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

// console.log(hexagons);


/*Color correction for the .json data */
for(var i = 0; i < hexagons.length; i++){
   hexagons[i].color = colorConv.colorPrepare(hexagons[i].color);
   if (hexagons[i].color == 'ff0000'){
      hexagons[i].color = 'Red';
   }
   else if(hexagons[i].color == 'ff9900'){
      hexagons[i].color = 'Orange';
   }
   else if(hexagons[i].color == '00ff00'){
      hexagons[i].color = 'Green';
   }
   else if(hexagons[i].color == '0000ff'){
      hexagons[i].color = 'Blue';
   }
   else if(hexagons[i].color == '990099'){
      hexagons[i].color = 'Purple';
   }
   else if(hexagons[i].color == '999999'){
      hexagons[i].color = 'Grey';
   }
   else if(hexagons[i].color == '00ffff'){
      hexagons[i].color = 'Turquoise';
   }
}
return hexagons;

/* Array of colors for later use

   var colors =
   [{red : 'ff0000'},
   {orange : 'ff9900'},
   {green : '00ff00'},
   {blue : '0000ff'},
   {purple : '990099'},
   {grey : '999999'},
   {cyan : '00ffff'}];
   
   */


}

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      hexArr : getHexagons()
      //Übergabe des .json Arrays an die dynamic_view
   });
});


app.listen(3000);