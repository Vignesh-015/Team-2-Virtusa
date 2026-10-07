import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function removeSpaces(str: string): string {
    return str.replace(/\s/g, "");
}
rl.question("Enter a string: ", (input: string) => {
    const result = removeSpaces(input);
    console.log("After removing spaces:", result);
    rl.close();
});