const fs = require("fs");
const path = require('path');
// installed with `npm install --save path`
const inquirer = require("inquirer");
// installed with `npm install --save inquirer@^8.0.0`
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'title',
		message: "What's the title of your project? ",
	},
	// The title of my project
	{
		type: 'input',
		name: 'description',
		message: "Enter a description of your project: ",
	},
	// Description


	// {badges: ""},

	
	{installation: ""},
	// Installation

	{usage: ""},
	{screenshotLink: ""},
	{screenshotAlt: ""},
	// Usage

	{
		type: 'list',
		name: 'prize',
		message: 'For leaving a comment, you get a freebie',
		choices: ['cake', 'fries'],
	}
	// License
	// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

	{contributors: []},
	{credits: []},
	// Contributing

	{tests: ""},
	// Tests

	{githubUser: ""},
	{emailAddress: ""}
	// Questions
	// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
	// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

];

inquirer.prompt(questions).then((answers) => {
	console.log('\nAnswers:');
	console.log(JSON.stringify(answers, null, '  '));
});

const readmeData = `
# ${title}

## Description
${description}

${badges}
![JS Badge](https://img.shields.io/badge/JavaScript-white?logo=javascript&logoColor=%23F7DF1E)
![Node.js Badge](https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=%#339933)
![Git Badge](https://img.shields.io/badge/Git-white?logo=git&logoColor=%23F05032)
![GitHub Badge](https://img.shields.io/badge/GitHub-white?logo=github&logoColor=%23181717)
![HTML Badge](https://img.shields.io/badge/HTML-white?logo=html5&logoColor=%23E34F26")
![CSS Badge](https://img.shields.io/badge/CSS-white?logo=CSS3&logoColor=%231572B6)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-white?logo=bootstrap&logoColor=%237952B3)
![jQuery Badge](https://img.shields.io/badge/jQuery-white?logo=jquery&logoColor=%230769AD)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation
${installation}

## Usage
${usage}
    ![${screenshotAlt}](${screenshotLink})
    
## Contributors & Credits
### Contributors
${contributors}
### Credits
${credits}

## Tests
${tests}

## License
${license}

## Questions
${githubUser}
${emailAddress}

## Tests
${tests}
`


// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => error ? console.error(err) : console.log(`Success! ${fileName} has been created.`));
}

// function to initialize program
function init() {


	// 1. ask questions
	
	// 2. record responses
	
	writeToFile("README.md", readmeData)
	// 3. write to file with responses
}

// function call to initialize program
init();







