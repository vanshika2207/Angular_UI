const fs = require("fs");

// Read the file contents into a buffer
const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const JSONdata = dataBuffer.toString();
console.log(JSONdata);
const dataObject = JSON.parse(JSONdata);
console.log(dataObject);
dataObject.planet = "earth";
console.log(dataObject);

const dataJSON = JSON.stringify(dataObject);

//write the file

fs.writeFileSync("1-json.json", dataJSON);
