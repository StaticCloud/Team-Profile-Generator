const fs = require('fs');
const { generateSection } = require('./generateSection')

// function that generates HTML profile page.
const generateProfile = (managers, engineers, interns) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/css/uikit.min.css" />
            <title>Team Profile</title>
        </head>
        <body>
            <section class="uk-section">
                <div class="uk-container">
                    <h3>Managers</h3>
                    <div id="manager-section" class="uk-flex uk-flex-wrap">
                        ${generateSection(managers)}
                    </div>
                </div>
            </section>

            <section class="uk-section">
                <div class="uk-container">
                    <h3>Engineers</h3>
                    <div id="engineer-section" class="uk-flex uk-flex-wrap">
                        ${generateSection(engineers)}
                    </div>
                </div>
            </section>

            <section class="uk-section">
                <div class="uk-container">
                    <h3>Interns</h3>
                    <div id="intern-section" class="uk-flex uk-flex-wrap">
                        ${generateSection(interns)}
                    </div>
                </div>
            </section>
            
        </body>
    </html>`;
}

const writeProfile = data => {
    fs.writeFile('./dist/index.html', data, err => { if (err) { console.log(err) } else { console.log('Profile created!') } })
}

module.exports = { generateProfile, writeProfile };