#!  /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(9999 + Math.random() + 20000);
console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([
    { name: "student",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return " please enter a non empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to be enrolled",
        choices: ["Hardware", "English language", "Mobile repairing", "Web development"]
    }
]);
let coachingFee = {
    "Hardware": 1000,
    "English language": 2000,
    "Mobile repairing": 3000,
    "Web development": 5000,
};
console.log(`Coaching Fees:${coachingFee[answer.courses]}`);
console.log(`Balance:${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Selesct payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Amount Transfer",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non empty value";
        }
    }
]);
console.log(`Select payment method ${paymentType.payment}`);
let coachingFees = coachingFee[answer.courses];
let paymentAmount = parseFloat(paymentType.amount);
if (coachingFees === paymentAmount) {
    console.log(`you have successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you do next?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n***status*** \n ");
        console.log(`student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course:${answer.courses}`);
        console.log(`Coaching Fees Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("End student management system");
    }
}
else {
    console.log("Amount required for completion this course");
}
