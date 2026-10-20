const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter start value: ", function(startInput) {
    rl.question("Enter end value: ", function(endInput) {

        let start = Number(startInput);
        let end = Number(endInput);

        let result = [];

        for (let i = start; i <= end; i++) {
            result.push(i);
        }

        console.log("Range:", result);

        rl.close();
    });
});