const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { generateProfile } = require('./src/generateProfile')

var employeeId = 1;

// employee data
var managers = [];
var engineers = [];
var interns = [];

// ask the user if they would like to add an employee
const employeePrompt = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add an employee?',
        choices: ['Yes', 'No']
    }).then(({ addEmployee }) => {
        // if so, begin prompting the user for employee info
        if (addEmployee) {
            getEmployee();
        } else {
            console.log(generateProfile(managers, engineers, interns))
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
                ).then(({ officeNumber }) => addManager(new Manager(name, employeeId, email, officeNumber)))
                break;
            case 'Engineer':
                inquirer.prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the engineer's GitHub username?"
                    }
                ).then(({ github }) => addEngineer(new Engineer(name, employeeId, email, github)))
                break;
            case 'Intern':
                inquirer.prompt(
                    {
                        type: 'input',
                        name: 'school',
                        message: "Where does the intern go to school?"
                    }
                ).then(({ school }) => addIntern(new Intern(name, employeeId, email, school)))
                break;
        }
    })
}

// add managers, engineer, or interns to the lists for appending to the page
const addManager = manager => {
    managers.push(manager);
    console.log(managers);
    employeePrompt();
}

const addEngineer = engineer => {
    engineers.push(engineer);
    console.log(engineers);
    employeePrompt();
}

const addIntern = intern => {
    interns.push(intern);
    console.log(interns);
    employeePrompt();
}

employeePrompt();