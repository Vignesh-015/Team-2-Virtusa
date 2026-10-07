const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a date: ", (input) => {
    const date = new Date(input);
    const formatDate = date.toISOString().split("T")[0];
    console.log(formatDate);
    rl.close();
});