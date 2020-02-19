//  Topic 5
// check if the local storage contains any items
function checkLS() {

    if (localStorage.getItem("arrValues") !== null) {
        document.getElementById("before").style.display = "none";
    }
}


// collect the user inputs, distribute them in different entities, store them locally and refresh the page
function storeAndRefresh() {

    // retrieve user inputs
    var fname = document.getElementById('fullName').value;
    var hoTo = document.getElementById('homeTown').value;
    var urAge = document.getElementById('urAge').value;

    // create array
    var arr = [fname, hoTo, urAge];

    // create associative array
    var assArr = {
        "fullName": fname,
        "homeTown": hoTo,
        "urAge": urAge
    };

    // create object
    var obj = {
        fullName: fname,
        homeTown: hoTo,
        urAge: urAge
    };

    // save the JavaScript entities in the local storage as JSON strings
    localStorage.setItem("arrValues", JSON.stringify(arr));
    localStorage.setItem("assArrValues", JSON.stringify(assArr));
    localStorage.setItem("objValues", JSON.stringify(obj));

    console.log(localStorage.getItem("arrValues"));
    console.log(localStorage.getItem("assArrValues"));
    console.log(localStorage.getItem("objValues"));

    refresh();
}


function refresh() {
    history.go(0);
}

// retrieve values from the items stored in the local storage
function retrieve() {

    // parse the JSON string into its corresponding JavaScript array
    var localArr = JSON.parse(localStorage.getItem("arrValues"));
    // fill the form labeled "From an Array"
    document.getElementById('arr1').value = localArr[0];
    document.getElementById('arr2').value = localArr[1];
    document.getElementById('arr3').value = localArr[2];

    // parse the JSON string into its corresponding JavaScript associative array
    var localAssArr = JSON.parse(localStorage.getItem("assArrValues"));
    // fill the form labeled "From an Associative Array"
    document.getElementById("assArr1").value = localAssArr["fullName"];
    document.getElementById("assArr2").value = localAssArr["homeTown"];
    document.getElementById("assArr3").value = localAssArr["urAge"];

    // parse the JSON string into its corresponding JavaScript object
    var localObj = JSON.parse(localStorage.getItem("objValues"));
    // fill the form labeled "From an Object"
    document.getElementById("obj1").value = localObj.fullName;
    document.getElementById("obj2").value = localObj.homeTown;
    document.getElementById("obj3").value = localObj.urAge;

}

// empty local storage
function emptyLS() {

    localStorage.removeItem("arrValues");
    localStorage.removeItem("assarrValues");
    localStorage.removeItem("objValues");

    refresh();
}
