const readline = require("readline-sync");

function rgbToHex(r, g, b) {
    return "#" +
           r.toString(16).padStart(2, "0") +
           g.toString(16).padStart(2, "0") +
           b.toString(16).padStart(2, "0");
}

let r = Number(readline.question("Enter R value: "));
let g = Number(readline.question("Enter G value: "));
let b = Number(readline.question("Enter B value: "));

console.log("RGB-Value:", rgbToHex(r, g, b));

