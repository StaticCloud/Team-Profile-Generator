const inquirer = require('inquirer');

// ask the user if they would like to add an employee
const run = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add an employee?',
        choices: ['Yes', 'No']
    }).then(answer => {
        // if so, begin prompting the user for employee info
        if (answer.addEmployee) {
            getEmployee();
        }
    })
}

// function that gets employee info from user
const getEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        }
    ])
}

run();