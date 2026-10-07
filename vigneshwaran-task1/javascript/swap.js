const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the first number (a): ", (aStr) => {
    rl.question("Enter the second number (b): ", (bStr) => {
        let a = Number(aStr);
        let b = Number(bStr);
        [a, b] = [b, a];
        console.log("Swapped values:");
        console.log("a =", a);
        console.log("b =", b);
        rl.close();
    });
});