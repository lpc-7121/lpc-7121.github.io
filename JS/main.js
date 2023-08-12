const AWS = require('aws-sdk');


var ScoldCounter = 0;

document.addEventListener("DOMContentLoaded", UpdateScoldCounter);
document.getElementById("Scold").onclick = OnScolded
function OnScolded(){
    ScoldCounter += 1;
    UpdateScoldCounter();
}
function UpdateScoldCounter(){
    var scoldCounterElement = document.getElementById("ScoldCounter");
    scoldCounterElement.textContent = "Dylan has been scolded: " + ScoldCounter + " times.";
}

