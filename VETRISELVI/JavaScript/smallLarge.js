const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {

    let digits = input.split("");

    let smallest = Number(digits[0]);
    let largest = Number(digits[0]);

    for (let i = 1; i < digits.length; i++) {

        let digit = Number(digits[i]);

        if (digit < smallest) {
            smallest = digit;
        }

        if (digit > largest) {
            largest = digit;
        }
    }

    console.log("Smallest digit:", smallest);
    console.log("Largest digit:", largest);

    rl.close();
});