// ************************Topic 8 (H) **********************


// *********************target item in the first square*****************

let morph = document.getElementById("morph");

// add an event listener to trigger the animation
morph.addEventListener('mouseover', function(){
    morph.style.animation = "morphing-circle-square 4s linear infinite";
});

// add an event listener to stop the animation
morph.addEventListener('mouseout', function(){
    morph.style.animation = "";
});



// *************************target item in the second square*********************

let morph_2 = document.getElementById('morph-2');

// add an event listener to trigger the transition
morph_2.addEventListener('mouseover', function(){
    morph_2.style.cssText = "border-radius: 0; background-color: #d19fe8; transform: rotate(180deg)";
    morph_2.style.transition = "border-radius 1s linear, background-color 1s linear, transform 1s linear";
});

// add an event listener to stop the transition
morph_2.addEventListener('mouseout', function(){
    morph_2.style.cssText = "height: 5em; width: 5em; background-color: #5218fa; border-radius: 50%";
    morph_2.style.transition = "border-radius 1s linear, background-color 1s linear, transform 1s linear";
});



// ************************target items in the third square***************************


let boxTwo = document.getElementById('box2');
let leftHalf = document.getElementById("left");
let rightHalf = document.getElementById("right");

// add an event listener to trigger the animation
boxTwo.addEventListener('mouseover', function(){

    leftHalf.style.animation = "left-half 3s linear infinite";
    rightHalf.style.animation = "right-half 3s linear infinite";
});

// add an event listener to stop the animation
boxTwo.addEventListener('mouseout', function(){
    leftHalf.style.animation = "";
    rightHalf.style.animation = "";
});




// **********************target item in the fourth square************************


let pulse = document.getElementById('pulse');

//add an event listener to trigger the animation
pulse.addEventListener('mouseover', function(){
    pulse.style.animation = "pulse 2.5s linear infinite";
});

// add an event listener to stop the animation
pulse.addEventListener('mouseout', function(){
    pulse.style.animation = "";
});

// ****************************reveal/hide side menu*****************************


function toggleNav() {
    let updateElement = document.getElementById("menu-icon");
    // toggle adds or removes a class attribute accordingly (the class name is used by CSS)
    updateElement.classList.toggle("open");
}