// ---------topic 12---------

/* ------------------------------------------
*           2D TRANSFORMATIONS
*  ------------------------------------------*/

// -------------target the BATMAN icon
let batman = document.getElementById("scBman");

// add an event listener to trigger the scale transform
batman.addEventListener("mouseover",function(){
    batman.style.cssText = "transform: scale(2.5); transition: transform .3s ease-in;";
});

// add an event listener to scale back
batman.addEventListener("mouseout",function(){
    batman.style.transform = "none";
});

// ----------target SUPERMAN icon
let superman = document.getElementById("scSman");

// add an event listener to trigger the scale transform
superman.addEventListener("mouseover", function(){
    superman.style.cssText = "transform: scale(-2);  transition: transform 1s ease-in-out;"
});

// add an event listener to scale back
superman.addEventListener("mouseout",function(){
    superman.style.transform = "none";
});


// --------------target PINWHEEL icon
let pinwheel = document.getElementById("roPin");

// add an event listener to trigger the rotation
pinwheel.addEventListener("mouseover", function(){
    pinwheel.style.cssText = "transform: rotate(360deg); transition: transform 1s linear;";
});

// add an event listener to go back to the initial state
pinwheel.addEventListener("mouseout", function(){
    pinwheel.style.cssText = "none";
});


// --------------target BOWLING-BALL icon
let reCycle = document.getElementById("roRec");

// add an event listener to trigger the rotation
reCycle.addEventListener("mouseover", function(){
    reCycle.style.cssText = "transform: rotate(-360deg); transition: transform 1s linear;";
});

// add an event listener to go back to the initial state
reCycle.addEventListener("mouseout", function(){
    reCycle.style.cssText = "none";
});




// ---------------------------target RIGHT ARROW icon
let arrowRight = document.getElementById("transRight");

// add an event listener to trigger the translation
arrowRight.addEventListener("mouseover", function(){
    arrowRight.style.cssText = "transform: translateX(3em); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
arrowRight.addEventListener("mouseout", function(){
    arrowRight.style.cssText = "transform: translateX(0em); transition: transform 1s ease;";
});


// -----------target LEFT ARROW icon
let arrowLeft = document.getElementById("transLeft");

// add an event listener to trigger the translation
arrowLeft.addEventListener("mouseover", function(){
    arrowLeft.style.cssText = "transform: translateX(-3em); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
arrowLeft.addEventListener("mouseout", function(){
    arrowLeft.style.cssText = "transform: translateX(0em); transition: transform 1s ease;";
});




// -----------------target FACEBOOK icon
let faceBook = document.getElementById("skewFac");

// add an event listener to trigger the skew function
faceBook.addEventListener("mouseover", function(){
    faceBook.style.cssText = "transform: skewX(30deg); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
faceBook.addEventListener("mouseout", function(){
    faceBook.style.cssText = "transform: skewX(0deg); transition: transform 1s ease;";
});




// -------------------target INSTAGRAM icon
let instaGram = document.getElementById("skewIns");

// add an event listener to trigger the skew function
instaGram.addEventListener("mouseover", function(){
    instaGram.style.cssText = "transform: skewY(30deg); transition: transform 1s ease;";
});

// add an event listener to go back to the initial state
instaGram.addEventListener("mouseout", function(){
    instaGram.style.cssText = "transform: skewY(0deg); transition: transform 1s ease;";
});


// target the happy box to transform
let happy = document.getElementById("textbox");

happy.addEventListener("mouseover", function(){
    happy.style.cssText = "transform: scale(1.75) translateX(6em) rotate(360deg); transition: transform 4s ease;";
});

happy.addEventListener("mouseout", function(){
    happy.style.cssText = "transform: scale(1) translateX(0em) rotate(0deg); transition: transform 4s ease;";
});

/* ------------------------------------------
*           3D TRANSFORMATIONS
*  ------------------------------------------*/

// -----------------------target HEART icon
let heart = document.getElementById("perRot3D");

heart.addEventListener("mouseover", function(){
    heart.style.cssText = "transform: perspective(90px) rotate3d(1,1,1,60deg); transition: transform 1s ease;";
});

heart.addEventListener("mouseout", function(){
    heart.style.cssText = "transform: perspective(0px) rotate3d(0,0,0,0deg); transition: transform 1s ease;";
});

// ------------------target HUMAN icon
let human = document.getElementById("humanP");

human.addEventListener("mouseover", function(){
    human.style.cssText = "transform: scale3D(1,0.50,.75) translate3D(6em,0,0); transition: transform 1s ease;";
});

human.addEventListener("mouseout", function(){
    human.style.cssText = "transform: none; transition: transform 1s ease;";
});




/* ***************** Example of Transforms ***************/  

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

