// topic 11






// control transitions in the Second container
// transition to 100% height
function spike(elem) {
    elem.style.cssText = "height: 100%; transition: height .5s linear";
}
// transition back to 20% height
function back(elem) {
    elem.style.cssText = "height: 20%; transition: height .5s linear";
}



// target the Third container
let checkBox = document.getElementById('checkbox');

// target the div containers (curtains)
let panels = document.querySelectorAll('.curtainPanel');

checkBox.addEventListener('click',function () {

    // loop through the div containers (curtains) and apply the transition properties
    for(let i =0; i < panels.length; i++) {
        panels[i].style.transition = "all 1s ease-out";
    }
});




// target the Fourth container
let colorBox = document.getElementById('box4');

// create an array of colors to loop through at every click
let colors = ["#037E36","#F6AE2D","#F6511D","#00A8E8","#D7263D","#003459"];

// set a counter as a starting index value
let i = 0;

// add an event listener to collect any user click and change color
colorBox.addEventListener('click', function(){

    // check if the counter is lower than the array length and increase or reset it accordingly
    if (i < colors.length){
        // transition from a background color to the next in the array
        colorBox.style.cssText = "background:" + colors[i] + "; transition: background 1.5s linear";
        i++;
    } else {
        i = 0;
        colorBox.style.cssText = "background:" + colors[i] + "; transition: background 1.5s linear";
        i++;
    }
});