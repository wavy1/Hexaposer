var context = new AudioContext();
var sound = new Audio("../sounds/sound1.mp3");
var source = context.createMediaElementSource(sound);
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var isPlaying = false;
sound.loop = true;

var gain = context.createGain();
var stereoPanner = context.createStereoPanner();
var delay = context.createDelay(4.0);
var biquadFilter = context.createBiquadFilter();
var distortion = context.createWaveShaper();
var oscillator = context.createOscillator();
var compressor = context.createDynamicsCompressor();

source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(compressor);
compressor.connect(context.destination);

//gain
document.getElementById("hexBlue").addEventListener("input", function(e){
    var gainValue = (this.value / 20);
    //document.getElementById("gainOutput").innerHTML = gainValue + " dB";
    gain.gain.value = gainValue;
});

//delay
document.getElementById("hexYellow").addEventListener("input", function (e) {
    var delayValue = (this.value / 25);
    //document.getElementById("delayOutput").innerHTML = delayValue + " sec";
    delay.delayTime.value = delayValue;
});

//stereoPanner
document.getElementById("hexGreen").addEventListener("input", function (e) {
    var panValue = (this.value - 50) / 50;
    //document.getElementById("panningOutput").innerHTML = panValue + " LR";
    stereoPanner.pan.value = panValue;
});

//distortion
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

document.getElementById("hexRed").addEventListener("input", function() {
    //document.getElementById("distortionOutput").innerHTML = this.value;
    distortion.curve = makeDistortionCurve(Number(this.value));
});

//biquadFilter
document.getElementById("hexOrange").addEventListener("input", function (e){
    biquadFilter.frequency.value = this.value;
    //document.getElementById("frequencyOutput").innerHTML = this.value + " Hz";
});

var HexPink = document.getElementById("hexPink");
var HexTurqouise = document.getElementById("hexTurquoise");

if($(HexPink).css('visibility') =='visible') {
        biquadFilter.type = "lowpass";
    } else if ($(HexTurqouise).css('visibility') =='visible') {
        biquadFilter.type = "highpass";
    } else if (($(HexPink).css('visibility') =='visible')($(HexTurqouise).css('visibility') =='visible')) {
        biquadFilter.type = "lowshelf";    
    } else if (($(HexPink).css('visibility') =='hidden')($(HexTurqouise).css('visibility') =='hidden')) {
        biquadFilter.type !== "lowpass" && biquadFilter.type !== "highpass";
}

//compressor
document.getElementById("hexPurple").addEventListener("input", function (e){
    compressor.knee.value = this.value;
    //document.getElementById("kneeOutput").innerHTML = this.value + " degree";
});


document.getElementById("hexGrey").addEventListener("input", function (e){
    compressor.attack.value = this.value;
    //document.getElementById("attackOutput").innerHTML = this.value + " sec";
});


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