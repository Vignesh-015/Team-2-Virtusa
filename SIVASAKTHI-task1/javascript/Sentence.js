const readline = require("readline-sync");

function countWords(sentence) {

    let spaceCount = 0;

    for (let i = 0; i < sentence.length; i++) {

        if (sentence[i] === " ") {
            spaceCount++;
        }
    }

    return spaceCount + 1;
}

let sentence = readline.question("Enter a sentence: ");

console.log("Number of words:", countWords(sentence));