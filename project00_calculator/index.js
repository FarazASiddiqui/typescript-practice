#!usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
    function welcome() {
        return __awaiter(this, void 0, void 0, function* () {
            let rainbowTitle = chalk_animation_1.default.rainbow("lets start calculator"); //start
            yield sleep();
            rainbowTitle.stop();
            console.log(`_____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|
        `);
            console.log(`${rainbowTitle} is fine`);
        });
    }
    welcome();
    function askQuestion() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "operator",
                    message: "Which operation you want to perform? \n",
                    choices: ["Addition", "Subtraction", "multiplication", "division"],
                },
                {
                    type: "number",
                    name: "num1",
                    message: "Enter number 1:",
                },
                {
                    type: "number",
                    name: "num2",
                    message: "Enter number 2:",
                },
            ]);
            if (answers.operator == "Addition") {
                console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            }
            else if (answers.operator == "Subtraction") {
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            }
            else if (answers.operator == "Multiplication") {
                console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            }
            else if (answers.operator == "Division") {
                console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            }
        });
    }
};
askQuestion();
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askQuestion();
            var again = yield inquirer_1.default;
            inquirer_1.default.prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue? press y or n:",
            });
        } while (again.restart == "y" ||
            again.restart == "yes" ||
            again.restart == "YES");
    });
}
startAgain();
