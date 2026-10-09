const readline = require("readline");
function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if(
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() &&
         today.getDate() < dob.getDate())
    ){
        age--;
    }
    return age;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your DOB (YYYY-MM-DD): ", function(dob) {
    console.log("Age:", calculateAge(dob));
    rl.close();
});
