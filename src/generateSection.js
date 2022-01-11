// generate respective section for various roles
const generateSection = data => {
    return data.map(
    `<div class="uk-card uk-card-secondary uk-width-1-3@m uk-margin-small-top uk-margin-small-right">
        <div class="uk-card-header">
            <h3 class="uk-card-title uk-margin-remove-bottom">${data.name}</h3>
            <p class="uk-text-meta">ID: ${data.id}</p>
        </div>
        <div class="uk-card-body">
            <p>Email: ${data.email}</p>
            ${generateInfo(data)}
        </div>
    </div>`).join('');
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

module.exports = generateSection;