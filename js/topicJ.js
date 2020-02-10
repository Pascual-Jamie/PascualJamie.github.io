// topic 10 

// target the first picture tag
var cOne = document.getElementById("picture1");

// set the context for picture #1
var cFir = cOne.getContext('2d');

// draw a square
cFir.fillStyle = "#ffe4b5";
cFir.fillRect(130.5, 55.5, 40, 40);


// draw a square border
cFir.beginPath();
cFir.moveTo(190, 40);
cFir.lineTo(110, 40);
cFir.lineTo(110, 110);
cFir.lineTo(190, 110);
cFir.lineTo(190, 40);
cFir.strokeStyle = "#6f00ff";
cFir.stroke();


// add bigger empty squares
cFir.beginPath();
cFir.moveTo(140, 30);
cFir.lineTo(50, 30);
cFir.lineTo(50, 120);
cFir.lineTo(140, 120);
cFir.lineTo(140, 30);
cFir.strokeStyle = "#d70a53";
cFir.stroke();

cFir.beginPath();
cFir.moveTo(160, 30);
cFir.lineTo(260, 30);
cFir.lineTo(260, 120);
cFir.lineTo(160, 120);
cFir.lineTo(160, 30);
cFir.strokeStyle = "#d70a53";
cFir.stroke();


//draw a circle around the little square
cFir.beginPath();
cFir.arc(150, 75, 70, 0, Math.PI * 2, false);
cFir.strokeStyle = "#696969";
cFir.stroke();



// target the second canvas
var cTwo = document.getElementById("picture2");

// set the context for canvas #2
var cSec = cTwo.getContext('2d');
cSec.font = "45px Apple Chancery, cursive";
cSec.fillText("Happy Birthday", 30, 110);
