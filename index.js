const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

// ask the user if they would like to add an employee
const run = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add an employee?',
        choices: ['Yes', 'No']
    }).then(({ addEmployee }) => {
        // if so, begin prompting the user for employee info
        if (addEmployee) {
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
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of your employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }

    ]).then(({name, email, role}) => {
        // ask the user about office number, github, or school depending on the role
        switch (role) {
            case 'Manager':
                inquirer.prompt(
                    {
                        type: 'number',
                        name: 'officeNumber',
                        message: "What is the manager's office number?"
                    }
                ).then(run)
                break;
            case 'Engineer':
                inquirer.prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the engineer's GitHub username?"
                    }
                ).then(run)
                break;
            case 'Intern':
                inquirer.prompt(
                    {
                        type: 'input',
                        name: 'school',
                        message: "Where does the intern go to school?"
                    }
                ).then(run)
                break;
        }
    })
}

run();