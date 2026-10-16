import * as readline from "readline-sync";

let n: number = Number(readline.question("Enter number of elements: "));

let arr: number[] = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(readline.question("Enter element: "));
}

let target: number = Number(readline.question("Enter element to search: "));

let found: boolean = false;

for (let i = 0; i < n; i++) {

    if (arr[i] === target) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Element not found");
}