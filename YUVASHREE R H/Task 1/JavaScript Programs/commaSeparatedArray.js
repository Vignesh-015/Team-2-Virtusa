const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter comma-separated values: ", function(input){
    let arr = input.split(",");
    console.log("Array:", arr);
    rl.close();
});
