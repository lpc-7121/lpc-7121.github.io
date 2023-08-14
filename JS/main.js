var ScoldCounter = 0;

const fetchParameter = async () => {
  try {
    const response = await fetch('https://hysp3zzhfkshrh62elol3vp6rq0zytev.lambda-url.us-east-1.on.aws/'); // No "await" here
    const data = await response.json(); // "response" is a promise, not a Response object yet
    console.log('Parameter value:', data.value);
    return await data.value
  } catch (error) {
    console.error('Error fetching parameter:', error);
  }
};
const incrementParameter = async () => {
  try {
    const response = await fetch('https://gvqqbvgdysgtpqghjs35befc340hhymg.lambda-url.us-east-1.on.aws/ '); // No "await" here
    const data = await response.json(); // "response" is a promise, not a Response object yet
    console.log('Parameter value:', data.value);
    return await data.value
  } catch (error) {
    console.error('Error fetching parameter:', error);
  }
};

document.addEventListener("DOMContentLoaded", OnScreenLoaded);
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