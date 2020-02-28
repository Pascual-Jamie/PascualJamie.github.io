// topic 6 (F)

window.onload = function() {
    var total_items_in_table = 10;

    document.getElementById("create_element_button").addEventListener("click", function() {
        var text_content = document.getElementById('new_content').value;
        if (text_content == "") {
             alert("We really need some content"); 
             return; 
            }
        var element_selected = document.getElementById('element_select').value;
        var new_element = document.createElement(element_selected);
        var new_content = document.createTextNode(text_content);
        new_element.appendChild(new_content);

        var current_div = document.getElementById('div_content_1');
        var last_div_fill = document.getElementById('filling_div_1');
        current_div.insertBefore(new_element, last_div_fill); 
        document.getElementById('new_content').value = "";
    });


    document.getElementById("remove_row").addEventListener("click", function() {
        var index_to_delete = document.getElementById('index_selected').value;
        if (index_to_delete == "") {
            alert("We need to know the index");
            return;
        }
        
        if (total_items_in_table != 0) {
            document.getElementById("names_table").deleteRow(index_to_delete);
            total_items_in_table--;
            document.getElementById('index_selected').max = total_items_in_table;
            document.getElementById('index_selected').value = "";
        } else {
            alert("Oops! There is no row in that index");
        }
    });
}






// FIRST CONTAINER: APPEND CHILD & REMOVE CHILD

// target the container
let box1 = document.getElementById('box1');
let tip1 = document.getElementById('tip1');

function appChild(){

    let count = box1.querySelectorAll('span');

    if(count.length === 0){
        tip1.style.display = "none";
    }

    // create an element
    let span = document.createElement('span');

    // add the element to a specific container
    box1.appendChild(span);

}

function remChild(){

    // count all the <span> tags within the parent element (returns an array)
    let count = box1.querySelectorAll('span');

    // check if there is at least one <span> tag in the array
    if (count.length > 0){
        // remove the first <span> tag in the array
        box1.removeChild(count[0]);
    } else {
        // if there are no <span> tag left, display a message
        tip1.style.display = "block";
        tip1.innerHTML = "No More Child to Remove";
    }

}

// SECOND CONTAINER: REPLACE CHILD
let box2 = document.getElementById('box2');
let tip2 = document.getElementById('tip2');

// create an element
let p = document.createElement('p');

function repChild() {

    p.style.background = "#FFBE00";
    p.textContent = "I'm Weird!";

    // remove the existing paragraph and place the new one
    box2.replaceChild(p,tip2);
}

function revert(){
    box2.replaceChild(tip2,p);
}

// THIRD CONTAINER: INSERT BEFORE
let box3 = document.getElementById('box3');
let spanFrag = document.createElement('span');
let spanTarget = document.getElementById('tip3');

function insBefore(){

    // add content to the new <span> tag
    spanFrag.textContent = "You";

    // insert the new <span> before the existing one
    box3.insertBefore(spanFrag,spanTarget);

}

// remove the element inserted before
function remInsert(){
    // count all the <span> tags within the parent element (returns an array)
    let count = box3.querySelectorAll('span');

    // check if there is at least one <span> tag in the array
    if (count.length == 2){
        // remove the first <span> tag in the array
        box3.removeChild(count[0]);
    }
}

// FOURTH CONTAINER: SET/REMOVE ATTRIBUTE

let inputFields = document.querySelectorAll('input');

// add a class attribute to apply style configured in the CSS stylesheet
function setAtt(){
    for(let field2 of inputFields){
        field2.setAttribute('class','field2');
    }
}
// remove the class attribute to remove the style previously applied
function remAtt(){
    for(let field2 of inputFields){
        field2.removeAttribute('class');
    }
}
