function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.project} </h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${answers.dependencies}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
 ${answers.contribute}
## Tests
 ${answers.test}
## The user should know
 ${answers.userexplain}<br />
<br />
Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
 Email me at: ${answers.email}<br /><br />
`;
}

module.exports = generateMarkdown;
