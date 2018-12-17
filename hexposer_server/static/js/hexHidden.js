//Bei 6 ausgewählten Hexagone, wird nur ein Hexagon auf Hidden gestellt. Rest wird angezeigt.

if (($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
    
    biquadFilter.type !== "highpass";
}
if (($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexRed).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexGreen).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexGrey).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}

//Bei 5 ausgewählten Hexagone, werden zwei Hexagone auf Hidden gestellt. Rest wird angezeigt.

if (($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass" && biquadFilter.type !== "highpass";
}
if (($(HexOrange).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexRed).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexRed).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;    
}
if (($(HexGreen).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";   
}
if (($(HexGreen).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";   
}
if (($(HexGreen).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;   
}
if (($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(biquadFilter);
    biquadFilter.connect(context.destination);  
}
if (($(HexGrey).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";   
}
if (($(HexGrey).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";   
}
if (($(HexGrey).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;  
}
if (($(HexGrey).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination); 
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination); 
}
if (($(HexBlue).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.type !== "highpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.type !== "lowpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.frquency.value.disabled;
}
if (($(HexBlue).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')) {
    source.connect(distortion);
    distortion.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}

//Bei 4 ausgewählten Hexagone, werden drei Hexagone auf Hidden gestellt. Rest wird angezeigt.

if (($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(context.destination);
}
if (($(HexRed).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.type !== "highpass";
}
if (($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGreen).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.type !== "highpass";
}
if (($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGreen).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGreen).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.type !== "highpass";
}
if (($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.type !== "lowpass";
}
if (($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(delay);
    delay.connect(biquadFilter);
    biquadFilter.connect(context.destination); 

    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.type !== "highpass";
}
if (($(HexGrey).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexGrey).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexGrey).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(gain);
    gain.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.type !== "highpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexBlue).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
    biquadFilter.frquency.value.disabled;
}
if (($(HexBlue).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(delay);
    delay.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')($(HexTurquoise).css('visibility') =='hidden')) {
    source.connect(distortion);
    distortion.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "highpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')($(HexPurple).css('visibility') =='hidden')) {
    source.connect(distortion);
    distortion.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.type !== "lowpass";
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')($(HexOrange).css('visibility') =='hidden')) {
    source.connect(distortion);
    distortion.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);

    biquadFilter.frquency.value.disabled;
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')($(HexRed).css('visibility') =='hidden')) {
    source.connect(stereoPanner);
    stereoPanner.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}
if (($(HexBlue).css('visibility') =='hidden')($(HexGrey).css('visibility') =='hidden')($(HexGreen).css('visibility') =='hidden')) {
    source.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(context.destination);
}