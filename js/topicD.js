// ***********Topic 4 AJAX Requesting a JSON File************** */

// create a variable to hold the html button item
var butn = document.getElementById('butn');

// add an event listener to the button
butn.addEventListener('click', function () {

    // retrieve the value from the radio button checked
     var city = document.form.list.city.value;


    // create an instance of XMLHttpRequest
    var rqt = new XMLHttpRequest();

    // establish the connection
    rqt.open('GET', 'https://api.weatherbit.io/v2.0/current?city_id=' + city + '&units=S&key=6e662e8988cd4c1fa9d3d9e9ccefa3ea');



    // if the request is successfully completed, then go ahead
    rqt.onload = function () {

        // parse the JSON string returned by the API web service server
        var data = JSON.parse(rqt.responseText);

        // print the parsed data into the console (for debugging purpose)
        console.log(data);

        // call for the function responsible to display the data in the html page
        fillHTMLelement(data);
    }

    rqt.send();
});


function fillHTMLelement(info) {

    var city = info.data[0].city_name;
    var temperature = info.data[0].temp;
    var desc = info.data[0].weather.description;

    document.getElementById('info1').innerHTML = city;
    document.getElementById('info2').innerHTML = temperature + " C&deg;";
    document.getElementById('info3').innerHTML = desc;
}