const readline = require("readline-sync");

let sentence = readline.question("Enter strings: ");

let arr = sentence.split(" ");

for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j].length > arr[j + 1].length) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Sorted strings:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}