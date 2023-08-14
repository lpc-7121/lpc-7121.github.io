var ScoldCounter = 0;

document.addEventListener("DOMContentLoaded", UpdateScoldCounter);
document.getElementById("Scold").onclick = OnScolded
function OnScolded(){
    ScoldCounter += 1;
    UpdateScoldCounter();
}
async function UpdateScoldCounter(){
  await incrementParameter()
  ScoldCounter = await fetchParameter()
  var scoldCounterElement = document.getElementById("ScoldCounter");
  scoldCounterElement.textContent = "Dylan has been scolded: " + ScoldCounter + " times.";
}
async function OnScreenLoaded(){
  console.log(await fetchParameter())
  ScoldCounter = await fetchParameter()
  var scoldCounterElement = document.getElementById("ScoldCounter");
  scoldCounterElement.textContent = "Dylan has been scolded: " + ScoldCounter + " times.";
}