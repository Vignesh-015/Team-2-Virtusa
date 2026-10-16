const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (str) => {
  const reverse = str.split("").reverse().join("");

  if (str === reverse) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }

  rl.close();
});