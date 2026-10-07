import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function findDuplicates(str: string): string[] {
    const duplicates: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            if (!duplicates.includes(str[i])) {
                duplicates.push(str[i]);
            }
        }
    }
    return duplicates;
}
rl.question("Enter a string: ", (input: string) => {
    const result = findDuplicates(input);
    console.log("Duplicate characters:", result);
    rl.close();
});