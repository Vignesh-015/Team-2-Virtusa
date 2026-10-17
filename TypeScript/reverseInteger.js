"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter an integer: ", function (input) {
    let number = Number(input);
    let reverse = 0;
    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }
    console.log("Reversed number:", reverse);
    rl.close();
});
