// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
    {
        name: "github",
        type: "input",
        message: "Whats your github username?"
    },
    {
        name: "email",
        type: "input",
        message: "Whats your email address?"
    },
    {
        name: "project",
        type: "input",
        message: "Whats your projects name?"
    },
    {
        name: "description",
        type: "input",
        message: "Give a short description of your project"
    },
    {
        name: "license",
        type: "list",
        message: "What kind of license does this project have?",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        name: "dependencies",
        type: "input",
        message: "What command should be ran to install its dependencies?"
    },
    {
        name: "test",
        type: "input",
        message: "What command should be ran to test the project?"
    },
    {
        name: "userexplain",
        type: "input",
        message: "What does the user need to know about using this repo?"
    },
    {
        name: "contribute",
        type: "input",
        message: "What does the user need to know in order to contribute to this repo?"
    }
]);
}
// TODO: Create a function to write README file
//function writeToFile("", data) {}
//    return fs.writeFileSync(path.join(process.cwd(), ))

// TODO: Create a function to initialize app
//function init() {
//    inquirer.prompt(questions).then((answers) => {
//            console.log(answers);
//        writeToFile()
//    })
//}

async function init() {
    try {
        const answers = await promptUser();
        const generatefile = generateMarkdown(answers);
        await writeFileAsync('./utils/generateMarkdown.md', generatefile);
        console.log("Successful ReadMe!");
    } catch (err) {
        console.log(err);
    }
}
// Function call to initialize app
init();