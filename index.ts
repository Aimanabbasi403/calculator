#! /user/bin/env node
import inquirer from "inquirer";




const answers = await inquirer.prompt([
    {message: "enter First Number", type: "number", name: "firstNumber"},
    {message: "enter Second Number", type:"number", name: "secondNumber"},
    {

        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division",],
    },

]);

const {firstNumber, secondNumber, operator} = answers;
let result

switch (operator) {
    case "addition":
        result = firstNumber + secondNumber;
        break;
    case "subtraction":
        result = firstNumber - secondNumber;
        break;
    case "multiplication":
        result = firstNumber * secondNumber;
        break;
    case "division":
        result = firstNumber / secondNumber;
        break;
    default:
        console.log("Invalid operation");
};

console.log(`result: ${firstNumber} ${operator} ${secondNumber}  = ${result}`);