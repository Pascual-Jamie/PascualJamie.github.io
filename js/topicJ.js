// topic 10 

// target the first picture tag
var cOne = document.getElementById('picture1');

// set the context for picture #1
var cFir = cOne.getContext('2d');

// draw a square
cFir.fillStyle = "#ff0000";
cFir.fillRect(137.5, 62.5, 25, 25);

// add a border to the square
cFir.beginPath();
cFir.moveTo(180, 50);
cFir.lineTo(120, 50);
cFir.lineTo(120, 100);
cFir.lineTo(180, 100);
cFir.lineTo(180, 50);
cFir.strokeStyle = "#ff1493";
cFir.stroke();

// draw some circles
cFir.beginPath();
cFir.arc(95, 75, 50, 0, Math.PI * 2, false);
cFir.strokeStyle = "#6f00ff";
cFir.stroke();

cFir.beginPath();
cFir.arc(205, 75, 50, 0, Math.PI * 2, false);
cFir.strokeStyle = "#6f00ff";
cFir.stroke();

cFir.beginPath();
cFir.arc(150, 75, 50, 0, Math.PI * 2, false);
cFir.strokeStyle = "#6f00ff";
cFir.stroke();


// target the second canvas
var cTwo = document.getElementById('picture2');

// set the context for canvas #2
var cSec = cTwo.getContext('2d');
cSec.font = "45px Apple Chancery, cursive";
cSec.strokeText("Jamie", 85, 80);
