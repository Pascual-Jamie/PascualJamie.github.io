/* Topic 2 JS */

// function to show object creation patterns
function retrieve(){

    // Set values to pass to the creation functions according to user selection
    let toy = document.forms.list.toy.value;

    // call the creation function based on the hero selected
    switch (toy){
        case 'buzz':
            let buzz = toyFactory("Buzz Lightyear","space ranger","Toy Story");
            document.getElementById('factory1').value = buzz.name;
            document.getElementById('factory2').value = buzz.allUpper();
            document.getElementById('factory3').value = buzz.provenance;
            break;
        case 'woody':
            let woody = new toyConstructor("Sherrif Woody", "cowboy", "Toy Story");
            document.getElementById('const1').value = woody.name;
            document.getElementById('const2').value = woody.allUpper();
            document.getElementById('const3').value = woody.provenance;
            break;
        case 'hamm':
            let hamm = new toyProto();
            // overriding
            hamm.name ="Hamm";
            hamm.toyS = "piggy bank";
            document.getElementById('proto1').value = hamm.name;
            document.getElementById('proto2').value = hamm.allUpper();
            document.getElementById('proto3').value = hamm.provenance;
            break;
    }
}

// Factory function
let toyFactory = function(name, toyS, provenance){
    return {
        name: name,
        toyS: toyS,
        provenance: provenance,
        allUpper: function(){
            return this.toyS.toUpperCase();
        }
    }
};

// Construction function
let toyConstructor = function(name, toyS, provenance){
    this.name = name;
    this.toyS = toyS;
    this.provenance = provenance;
    this.allUpper = function(){
         return this.toyS.toUpperCase();
    }
};

// Prototype function
let toyProto = function(){
};
toyProto.prototype.name = "Unknown";
toyProto.prototype.toyS = "Unknown";
toyProto.prototype.provenance = "Toy Story";
toyProto.prototype.allUpper = function(){ return this.toyS.toUpperCase() };


// prototyping and inheritance functions  Part 2

function proto(){

    let buzZ = { toyS:"Space Ranger", provenance:"Toy Story" };
    let weapon = { lazer:"Lazer", jetPack:"Jet Pack" };

    // using Object.create() function
    let legolasCreate = Object.create(buzZ);
    legolasCreate.name = "Buzz Lightyear";
    legolasCreate.gender = "M";
    document.getElementById("create1").value = legolasCreate.name;
    document.getElementById("create2").value = legolasCreate.gender;
    document.getElementById("create3").value = legolasCreate.toyS;
    document.getElementById("create4").value = legolasCreate.provenance;

    // using the spread operator
    let legolasSpread = {...buzZ};
    legolasSpread.name = "Buzz Lightyear";
    legolasSpread.gender = "M";
    document.getElementById("spread1").value = legolasSpread.name;
    document.getElementById("spread2").value = legolasSpread.gender;
    document.getElementById("spread3").value = legolasSpread.toyS;
    document.getElementById("spread4").value = legolasSpread.provenance;

    // using Object.assign() function
    let legolasAssign = Object.assign({},buzZ, weapon);
    legolasAssign.name = "Buzz Lightyear";
    document.getElementById("assign1").value = legolasAssign.name;
    document.getElementById("assign2").value = legolasAssign.toyS;
    document.getElementById("assign3").value = legolasAssign.lazer;
    document.getElementById("assign4").value = legolasAssign.jetPack;


}



// function to reset input fields in the forms
function reset(){
    document.getElementsByClassName("field").reset();
}
