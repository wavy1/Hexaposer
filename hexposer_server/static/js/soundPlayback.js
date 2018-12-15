var context = new AudioContext();
var sound = new Audio("../sounds/sound1.mp3");
var source = context.createMediaElementSource(sound);
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var isPlaying = false;
sound.loop = true;

var gain = context.createGain();
var delay = context.createDelay(4.0);
var stereoPanner = context.createStereoPanner();
var distortion = context.createWaveShaper();
var biquadFilter = context.createBiquadFilter();
//var compressor = context.createDynamicsCompressor();

source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(context.destination);
// biquadFilter.connect(compressor);
//compressor.connect(context.destination);

var HexBlue = document.getElementById("hexBlue");
var HexYellow = document.getElementById("hexYellow");
var HexGreen = document.getElementById("hexGreen");
var HexRed = document.getElementById("hexRed");
var HexOrange = document.getElementById("hexOrange");
var HexPink = document.getElementById("hexPink");
var HexTurqouise = document.getElementById("hexTurquoise");
var HexPurple = document.getElementById("hexPurple");
var HexGrey = document.getElementById("hexGrey");

//GAIN

if($(HexBlue).css('visibility') =='visible') {
    var gainValue = 1;  //Je höher, desto lauter
    gain.gain.value = gainValue;
} else if ($(HexBlue).css('visibility') =='hidden') {
    gain.gain.value = gainValue.disabled;
}

//DELAY

if($(HexYellow).css('visibility') =='visible') {
    var delayValue = 0; //0Sek nach Klick auf dem PlayButton Sound ausgespielt
    delay.delayTime.value = delayValue;
} else if ($(HexYellow).css('visibility') =='hidden') {
    delay.delayTime.value = delayValue.disabled;
}

//STEREOPANNER

if($(HexGreen).css('visibility') =='visible') {
    var panValue = 0;   //-1=Links, 0=Normal, +1=Rechts
    stereoPanner.pan.value = panValue;
} else if ($(HexGreen).css('visibility') =='hidden') {
    stereoPanner.pan.value = panValue.disabled;
}

//DISTORTION

distortion.curve = makeDistortionCurve(0);
distortion.oversample = "4x";

function makeDistortionCurve(amount) {
    var k = typeof amount === 'number' ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for ( ; i < n_samples; ++i ) {
      x = i * 2 / n_samples - 1;
      curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
    }
    return curve;
  };

if($(HexRed).css('visibility') =='visible') {
    distortion.curve.disabled;
} else if ($(HexRed).css('visibility') =='hidden') {
    distortion.curve = makeDistortionCurve(Number(this.value));
}

//BIQUADFILTER.FREQUENCY

if($(HexOrange).css('visibility') =='visible') {
    biquadFilter.frequency.value = 350; //350=Standartwert -Es sind keine Veränderungen in der Soundausgabe zu hören
} else if ($(HexOrange).css('visibility') =='hidden') {
    biquadFilter.frquency.value.disabled;
}

//BIQUADFILTER.TYPE = "LOWPASS" AND "HIGHPASS" AND "LOWSHELF"

if($(HexPink).css('visibility') =='visible') {
    biquadFilter.type = "lowpass";
} else if ($(HexTurqouise).css('visibility') =='visible') {
    biquadFilter.type = "highpass";
} else if (($(HexPink).css('visibility') =='visible')($(HexTurqouise).css('visibility') =='visible')) {
    biquadFilter.type = "lowshelf";    
} else if (($(HexPink).css('visibility') =='hidden')($(HexTurqouise).css('visibility') =='hidden')) {
    biquadFilter.type !== "lowpass" && biquadFilter.type !== "highpass";
}

//COMPRESSOR.KNEE

// if($(HexPurple).css('visibility') =='visible') {
//     compressor.knee.value = 5000;
// } else if ($(HexPurple).css('visibility') =='hidden') {
//     compressor.knee.value.disabled;
// }

//COMPRESSOR.ATTACK

// if($(HexGrey).css('visibility') =='visible') {
//     compressor.attack.value = 5000;
// } else if ($(HexPurple).css('visibility') =='hidden') {
//     compressor.attack.value.disabled;
// }

//PLAY/STOP-BUTTON

playStopButton.addEventListener("click", function() {
    if (isPlaying) {
        sound.pause();
        playButton.disabled = false;
        pauseButton.disabled = true;

    } else {
        sound.play();
        pauseButton.disabled = false;
        playButton.disabled = true;
    }

    isPlaying = !isPlaying;
});

sound.addEventListener("ended", function() {
    isPlaying = false;
});