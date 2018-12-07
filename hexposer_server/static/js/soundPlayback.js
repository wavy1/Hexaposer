var context = new AudioContext();
var sound = new Audio("../sounds/sound1.mp3");
var source = context.createMediaElementSource(sound);
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var isPlaying = false;
sound.loop = true;

source.connect(context.destination);

playStopButton.addEventListener("click", function () {
    if (isPlaying) {
        sound.pause();
        playButton;
    } else {
        sound.play();
        pauseButton;
    }

    isPlaying = !isPlaying;
});