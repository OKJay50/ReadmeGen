const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for information about the project
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const {
      title,
      description,
      installation,
      usage,
      contributing,
      tests,
      license,
      githubUsername,
      email,
    } = answers;

    // Create the README content
    const readmeContent = `# ${title}

${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is covered under the ${license} license.

## Questions
For any questions or feedback, feel free to reach out to me via [GitHub](https://github.com/${githubUsername}) or email me at ${email}.
    `;

    // Write the content to README.md
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md generated successfully!');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
