import * as readline from "readline-sync";
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid input");
}
let a = readline.question("Enter first value: ");
let b = readline.question("Enter second value: ");
if (!isNaN(Number(a)) && !isNaN(Number(b))) {
    console.log("Result =", combine(Number(a), Number(b)));
} else {
    console.log("Result =", combine(a, b));
}
