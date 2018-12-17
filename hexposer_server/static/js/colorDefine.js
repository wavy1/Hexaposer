import { objectExpression } from "babel-types";

/* function to transform a Hex_Color value  to a rgb value {0-255,0-255,0-255}

@param color : hexadecimal string (#000000-#ffffff)

@return rgbColor: {rChannel:num, gChannel:num, bChannel:num}
*/

function convertColor(color) {
    /* Check for # infront of the value, if it's there, strip it. Could be deleted */
  
    if(color.substring(0,1) == '#') {
       color = color.substring(1);
     }
  
    var rgbColor = {};
  
    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.rChannel = parseInt(color.substring(0,2),16);
    rgbColor.gChannel = parseInt(color.substring(2,4),16);
    rgbColor.bChannel = parseInt(color.substring(4),16);
  
    return rgbColor;
}

    /* function to check the closest distance of a number to an array of numbers*/

    /*  @param num : number to check
        @param arr : array of numbers to check against
    
        @return curr : closest value for the num out of the given array
    */

   function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}


 var testeroni = convertColor('#1090ff');
 
 console.log(testeroni)
 var colorRange = [0, 153, 255];
 
 function colorAdjust (obj){
    for (var property in obj){
       obj[property] = closest(obj[property],colorRange);
       console.log(obj[property]);     
    }
    return obj
 }
 
console.log(colorAdjust(testeroni));



   var red      = 'ff0000';
   var yellow   = 'ffff00';
   var pink     = 'ff99ff';
   var orange   = 'ff9900';
   var green    = '00ff00';
   var blue     = '0000ff';
   var purple   = '990099';
   var grey     = '999999';
   var cyan     = '00ffff';