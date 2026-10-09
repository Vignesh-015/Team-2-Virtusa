import * as readline from "readline-sync";
let num = readline.questionInt("Enter a number: ");
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
