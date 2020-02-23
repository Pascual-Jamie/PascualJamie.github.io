// -----topic M (13)------ 


/* *************+ FIRST CONTAINER *************** */
// trigger the first animation in the first container (up left box)
function moveDown(){

    let animateBoxOne = document.getElementById('translateMe');

    // starting position
    let transOne = 0;

    // use the setInterval() function to repeat an action every given milliseconds
    let inter = setInterval(moveDown, 85);

    // function to translate the inner box
    function moveDown(){

        if (transOne === 10){
            // stop repeating the action by clearing the timer
            clearInterval(inter);
        } else {
            transOne++;
            animateBoxOne.style.top = transOne + 'em';
            animateBoxOne.style.left = transOne + 'em';
        }
    }
}




/* *************+ SECOND CONTAINER *************** */
// trigger the second animation in the first container (up left box)
function backUp(){

    let animeBoxOne = document.getElementById('translateMe');

    // starting position
    let transPos = 10;

    // use the setInterval() function to repeat an action every given milliseconds
    let inter = setInterval(moveUp, 35);

    // function to translate the inner box
    function moveUp(){

        if (transPos === 0){
            // stop repeating the action by clearing the timer
            clearInterval(inter);
        } else {
            transPos--;
            animeBoxOne.style.top = transPos + 'em';
            animeBoxOne.style.left = transPos + 'em';
        }
    }
}



/* *************+ SECOND CONTAINER *************** */
// trigger the start animation in the second container

let rollingBox = document.getElementById('rollMe');

let startRoll = document.getElementById('startRoll');

startRoll.addEventListener('click', function () {

    rollingBox.style.animation = "roll 3s linear infinite";

});

// trigger the stop animation in the second container
let stopRoll = document.getElementById('stopRoll');

stopRoll.addEventListener('click', function(){
    // remove the animation properties
    rollingBox.style.animation = "";

});




/* *************+ THIRD CONTAINER *************** */
// trigger the start animation in the third container

let text = document.getElementById('text');

function dimIn(){
    text.style.animation = "fadeIn 4s linear 1";
    text.style.animationFillMode = "forwards";

}

// trigger the end animation in the fourth container
function dimOut(){
    text.style.animation = "fadeOut 4s linear 1";
    text.style.animationFillMode = "forwards";
}





/* *************+ FOURTH CONTAINER *************** */
// animation in the third container onload


// target all the "bubble" elements
let bubbles = document.querySelectorAll('.bubble');
// run this function when the page loads
window.onload = function() {

    // for each element, apply the following animation properties
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].style.cssText = "animation: bubbleUp 3s linear infinite; animation-delay:" + (Math.floor(Math.random() * 4) + 1) +"s";
    }
};