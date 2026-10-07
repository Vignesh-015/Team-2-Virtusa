import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function countOccurrences(arr: number[], element: number): number {
    return arr.filter(value => value === element).length;
}
rl.question("Enter numbers separated by spaces: ", (input: string) => {
    const numbers: number[] = input.split(" ").map(Number);
    rl.question("Enter the element to count: ", (elementInput: string) => {
        const element: number = Number(elementInput);
        const result = countOccurrences(numbers, element);
        console.log("Number of occurrences:", result);
        rl.close();
    });
});