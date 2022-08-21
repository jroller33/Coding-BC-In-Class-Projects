const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');

inquirer.prompt([
    {
        type: "input",
        name: "userName",
        message: "What is your name?"
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What languages do you know?",
        choices: ["English", "Spanish", "DeezNuts"]
    },
    {
        type: "list",
        name: "preferredComm",
        message: "What is your preferred method of communication?",
        choices: ["phone", "text", "email"]
    }
]).then(response => {
    fs.writeFile('output.json', JSON.stringify(response), (err) => {
        err ? console.log(err) : console.log("File written in ./output.json")
    })
});
