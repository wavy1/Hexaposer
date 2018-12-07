var express = require('express');
var app = express();
var fs = require('fs');

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

let myjson = fs.readFileSync('info.json');
var test = JSON.parse(myjson);
var hexagons = [];
for (var i = 0; i < test.Hexagons.length; i++){
  hexagons[i] = test.Hexagons[i];
}
console.log(hexagons[2]);
//var data = JSON.parse(read(Hexagons));



//console.log(read);
//console.log(data);

var arr1 =[];
var arr2 =[];

//arr1.push([0,data[0]]);
//arr1.push([1,data[1]]);


app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      
      //Hier müssten die .json Daten einfließen
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});


app.listen(3000);