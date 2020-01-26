// targeting a single sentence, <h3>
var header = document.getElementById('head3');

//use event listener to change the sentence
header.addEventListener('mouseover', function () {

    //set the style you want to apply
    "use strict";
    var look = "text-align: center; font-size: 2em; color: #00ff00;";

    //apply CSS rule
    header.style.cssText = look;

});

header.addEventListener('mouseout', function () {

    //remove the style
    "use strict";
    header.style.cssText = 'none';

});

//target the label tags
var labels = document.querySelectorAll('.info');

// target the imput information
var fields = document.querySelectorAll('.field');

function styleForm() {

    //set the style of the class
    "use strict";
    var labelCSS = "display:inline-block; " +
        "width:6em; " +
        "color: #000000;";

    //apply settings specified using "style.cssText"
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.cssText = labelCSS;
    }

    //set the style of the class field
    "use strict";
    var fieldCSS = "background: rgba(0,0,0,0.6);" +
        "padding:.7em;" +
        "text-align: center;" +
        "border-radius: 50px;" +
        "border-style: none;" +
        "font-size: .7em;" +
        "margin: .7em 0 0 .7em;" +
        "color: #009000;";

    //apply settings using setAttribute()function
    for (var i = 0; i < fields.length; i++) {
        fields[i].setAttribute("style", fieldCSS);
    }
}


function unStyleForm() {


    // remove any style from labels
    for (var i = 0; i < labels.length; i++) {
        labels[i].style = 'none';
    }

    // remove any styles from the fields with removeAttribute
    for (var i = 0; i < fields.length; i++) {
        fields[i].removeAttribute("style");
    }

}

//select the pic you want to zoom
var frame = document.getElementById('bigPic');

//hover mouse over thumbnail
function zoomIn(element) {

    //place image as background
    frame.style.backgroundImage = "url(" + element.src + ")";
}

//on mouse leaving remove image
function zoomOut(element) {
    frame.style.backgroundImage = "";
}


//target the list elements

var liss = document.querySelectorAll('.struck');

//apply styles to lists
function styleList() {


    //set the style to the elements
    var lissCSS = "background: rgba(0,0,0,0.6);" +
        "margin: 1em 0 0 0;" +
        "display: flex;" +
        "justify-content: center;" +
        "border-radius: 30px;" +
        "list-style: none;" +
        "color: #f8f8ff;" +
        "font-size:1.2em;" +
        "height: 2em;" +
        "width: 18em;";

    //apply the settings style.cssText
    for (var i = 0; i < liss.length; i++) {
        liss[i].style.cssText = lissCSS;
    }
}
//removing the style from lists
function unStyleList() {

    //remove any style from the list
    for (var i = 0; i < liss.length; i++) {
        liss[i].style = 'none';

    }


}
