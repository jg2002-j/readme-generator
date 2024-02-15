const fs = require("fs");
const path = require('path');
// installed with `npm install --save path`
const inquirer = require("inquirer");
// installed with `npm install --save inquirer@^8.0.0`
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

	{title: ""},
	// The title of my project

	{description: ""},
	// Description

	{installation: ""},
	// Installation

	{usage: ""},
	{screenshotLink: ""},
	{screenshotAlt: ""},
	// Usage

	{license: ""},
	// License
	// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

	{contributors: []},
	{credits: []},
	// Contributing

	{tests: ""},
	// Tests

	{questions: ""},
	// Questions
	// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
	// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

];

const readmeData = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
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

---

## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Questions
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${tests}
`


const filepath = "";

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => error ? console.error(err) : console.log(`Success! ${fileName} has been saved to ${filepath}`));
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







