const readline = require("readline-sync");

let sentence: string = readline.question("Enter a sentence: ");

let shortest: string = "";
let word: string = "";

for (let i = 0; i <= sentence.length; i++) {

    if (i < sentence.length && sentence[i] !== " ") {
        word = word + sentence[i];
    }
    else {

        if (word.length > 0) {

            if (shortest === "" || word.length < shortest.length) {
                shortest = word;
            }

            word = "";
        }
    }
}
console.log("Shortest word:", shortest);