const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", function(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0].toUpperCase() +
                      words[i].slice(1).toLowerCase();
        }
        if (i < words.length - 1) {
            result += " ";
        }
    }
    console.log("Title Case:", result);
    rl.close();
});
