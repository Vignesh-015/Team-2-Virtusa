const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers separated by spaces: ", function(input: string) {

    let numbers: number[] = input.split(" ").map(Number);

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    console.log("Largest number:", largest);

    rl.close();
});
export {};