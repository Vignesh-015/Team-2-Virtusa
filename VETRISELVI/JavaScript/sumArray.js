const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by spaces: ", function(input) {

    let numbers = input.split(" ").map(Number);

    let sum = 0;

    for (let number of numbers) {
        sum = sum + number;
    }

    console.log("Sum:", sum);

    rl.close();
});