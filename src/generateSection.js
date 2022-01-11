// generate respective section for various roles
const generateSection = data => {
    return data.map(employee => 
    `<div class="uk-width-1-3">
        <div class="uk-card uk-card-secondary uk-margin-small-top uk-margin-small-right">
            <div class="uk-card-header">
                <h3 class="uk-card-title uk-margin-remove-bottom">${employee.name}</h3>
                <p class="uk-text-meta">ID: ${employee.id}</p>
            </div>
            <div class="uk-card-body">
                <p>Email: ${employee.email}</p>
                ${generateInfo(employee)}
            </div>
        </div>
    </div>
    `).join('');
}

// will return an office number, school, or github profile depending on what section is being generated
const generateInfo = data => {
    switch (data.getRole()) {
        case 'Manager':
            return `<p>Office Number: ${data.officeNumber}</p>`
        case 'Intern':
            return `<p>School: ${data.school}</p>`
        case 'Engineer':
            return `<p>Github: <a href='https://github.com/${data.github}'>${data.github}</a></p>`
    }
}

module.exports = { generateSection };