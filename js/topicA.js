/* Topic 1 JS */
function calcAndArray() {
    // for the input let the user provide the quanities, operator and results.

    var a = parseInt(document.getElementById('firstOperand').value);
    var operator = document.getElementById('operator').value;
    var b = parseInt(document.getElementById('secondOperand').value);
    var answer = parseInt(document.getElementById('answer').value);


    //let the prgram caculate the operation based on user imput and compare with answer.
    var solution;
    var message;

    //switch statement to check the operator

    switch (operator) {
        case '+':
            //call for function
            solution = add(a, b);
            break;
        case '-':
            //call for function
            solution = sub(a, b);
            break;
        case '*':
            //call for function
            solution = per(a, b);
            break;
        case '/':
            //call for function
            solution = div(a, b);
            break;
        case '%':
            //call for function
            solution = mod(a, b);
            break;
        default:
            message = "Missing operator";
            //display a basic error message into html element
            return document.getElementById('output').innerHTML = message;
    }


    // If statement to check the solution of operation.
    if (solution === answer) {
        message = "You are Correct! Great Job!!";
        // Add answer to the array
        addToArray(answer);
    } else {
        message = "Wrong Answer. Please Review your math.";
    }

    //Associative Array #1
    var express = {
        "fo": a,
        "op": operator,
        "so": b,
        "ans": answer,
        "message": message
    };
    addLogExp(express);

    // Output: display a message into the specified html element
    document.getElementById('output').innerHTML = message;

    //for loop through the array and display items here
    var spanOne = "<span>";

    for (var i = 0; i < results.length; i++) {
        spanOne += results[i] + "</span>" + "&nbsp;&nbsp;";
    }

    document.getElementById("arrayList").innerHTML = spanOne;

    var j = 0;
    var sum = 0;

    if (results.length == 0) {
        document.getElementById("arraySum").innerHTML = "";
    } else {
        while (j < results.length) {
            sum += results[j];
            j += 1;
        }
        document.getElementById('arraySum').innerHTML = "" + sum;
    }

    // For-Each loop to mulitiply the array together.
    var product = 1;

    if (results.length == 0) {
        document.getElementById('arrayProduct').innerHTML = "";
    } else {
        for (var result of results) {
            product *= result;
        }
        document.getElementById('arrayProduct').innerHTML = "" + product;
    }

}

function selectOperator(ide) {

    // Associatiive Array #2
    var operators = {
        "addition": "+",
        "subtraction": "-",
        "multiplication": "*",
        "division": "/",
        "modulus": "%"
    };



    switch (ide) {
        case "addition":
            document.getElementById('operator').value = operators['addition'];
            break;
        case "subtraction":
            document.getElementById('operator').value = operators['subtraction'];
            break;
        case "multiplication":
            document.getElementById('operator').value = operators['multiplication'];
            break;
        case "division":
            document.getElementById('operator').value = operators['division'];
            break;
        case "modulus":
            document.getElementById('operator').value = operators['modulus'];
            break;

    }

}


function add(first, second) {
    return first + second;
}

function sub(first, second) {
    return first - second;
}

function per(first, second) {
    return first * second;
}

function div(first, second) {
    return first / second;
}

function mod(first, second) {
    return first % second;
}


//Array to hold results
var results = [];

function addToArray(value) {
    results.push(value);
    document.getElementById('attempts').innerHTML = "" + results.length;
}

// Arary to hold the Arrays of expression logs
var logs = [];

function addLogExp(log) {
    //add the logs to the array
    logs.push(log);
}

function logJournal() {
    //holding container element
    var cont = document.getElementById('logs');

    // loop counter
    var j = 1;


    //variable for concatentating arrays
    var loco = "<span>";

    //loop through the arrays
    for (var i = 0; i < logs.length; i++) {

        loco += 'Attempt #' + j + '&nbsp;&nbsp;' +
            logs[i]['fo'] + ' ' +
            logs[i]['op'] + ' ' +
            logs[i]['so'] + ' = ' +
            logs[i]['ans'] + '&nbsp;&nbsp;' +
            logs[i]['message'] +
            '</span><br>';
        j++;
    }

    cont.innerHTML = loco;
}

function reset() {
    document.getElementsByClassName('fields').reset();

}
