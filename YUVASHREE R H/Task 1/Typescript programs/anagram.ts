import * as readline from "readline-sync";
let str1 = readline.question("Enter first string: ").toLowerCase();
let str2 = readline.question("Enter second string: ").toLowerCase();
if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    let isAnagram = true;
    for (let ch of str1) {
        let index = str2.indexOf(ch);
        if (index === -1) {
            isAnagram = false;
            break;
        }
        str2 = str2.slice(0, index) + str2.slice(index + 1);
    }
    console.log(isAnagram ? "The strings are Anagrams" : "Not Anagrams");
}
