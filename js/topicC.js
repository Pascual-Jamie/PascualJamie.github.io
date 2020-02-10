// Topic 3 js

// pull content from a JSON file
function parseJson() {

    "use strict";
    var strg = document.getElementById('jsString').innerText;



    // parse the JSON string
    var objc = JSON.parse(strg);

    // place relevant values in each readonly input field
    document.getElementById('firstName').value = objc.contacts.firstName;
    document.getElementById('lastName').value = objc.contacts.lastName;
    document.getElementById('gender').value = objc.contacts.gender;
    document.getElementById('birthDay').value = objc.contacts.birthDay;
    document.getElementById('street').value = objc.contacts.address.street;
    document.getElementById('city').value = objc.contacts.address.city;
    document.getElementById('state').value = objc.contacts.address.state;
    document.getElementById('zipCode').value = objc.contacts.address.zipCode;

}



// base JavaScript object
var solarSystemPlanets = {
    name: "Jupiter",
    volume: "1,321 x Earths",
    surfaceArea: "120 x Earths",
    composition: {
        hydrogen: "90%",
        helium: "10%",
        oxygen: "traces"
    }
};


// stringify the Javascript object and nad set indentation by passing some parameters
function jupiterStr() {

    "use strict";
    var strg = JSON.stringify(solarSystemPlanets, null, 3);

    console.log(strg);

    var newStrg = "<pre>" + strg + "</pre>";

    document.getElementById('resultsOne').innerHTML = newStrg;
}

// stringify after calling the rep() function
function jupiterRpc() {

    "use strict";
    var strg = JSON.stringify(solarSystemPlanets, rep, 3);

    console.log(strg);

    var newStrg = "<pre>" + strg + "</pre>";

    document.getElementById('resultsTwo').innerHTML = newStrg;

}
// convert JavaScript object into a string, but replace values including "Earths" with actual values
function rep(key, value) {
    "use strict";

    switch (key) {
        case 'volume':
            value = "1,431,281,810,739,360 cubic kilometers";
            return value;
            break;
        case 'surfaceArea':
            value = "23,713,907,537 square miles";
            return value;
            break;
        default:
            return value;
    }
}

// stringify only specific attributes from the original object by specifying its attributes
function jupiterFltr() {

    // convert JavaScript object into a string, but select specific attributes
    "use strict";
    var strg = JSON.stringify(solarSystemPlanets, ['name', 'volume', 'surfaceArea'], 3);

    console.log(strg);

    var newStrg = "<pre>" + strg + "</pre>";

    document.getElementById('resultsThree').innerHTML = newStrg;
}


// reset form
function reset() {
    "use strict";
    document.getElementsByClassName("field").reset();
}
