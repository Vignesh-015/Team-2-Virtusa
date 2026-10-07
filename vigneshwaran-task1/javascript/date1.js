const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a date: ", (input) => {
    const date = new Date(input);
    const formatted =
        date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2, "0") + "-" +
        String(date.getDate()).padStart(2, "0");

    console.log(formatted);
    rl.close();
});