const fs = require("fs");
// installed with `npm install --save path`
const path = require('path');
// installed with `npm install --save inquirer@^8.0.0`
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		// The title of my project
		type: "input",
		name: "title",
		message: "Enter a title for your project:",
		default: "My Project",
	},
	{
		// Description
		type: "input",
		name: "description",
		message: "Enter a description of your project:",
		default: "What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
	},
	{
		// Tech Badges
		type: "checkbox",
		name: "badges",
		message: "Choose all the technologies you used:",
		choices: [
			{name: "HTML", value: `![HTML Badge](https://img.shields.io/badge/HTML-white?logo=html5&logoColor=%23E34F26")`,},
			{name: "CSS", value: `![CSS Badge](https://img.shields.io/badge/CSS-white?logo=CSS3&logoColor=%231572B6)`,},
			{name: "JavaScript", value: `![JS Badge](https://img.shields.io/badge/JavaScript-white?logo=javascript&logoColor=%23F7DF1E)`,},
			{name: "Git", value: `![Git Badge](https://img.shields.io/badge/Git-white?logo=git&logoColor=%23F05032)`,},
			{name: "GitHub", value: `![GitHub Badge](https://img.shields.io/badge/GitHub-white?logo=github&logoColor=%23181717)`,},
			{name: "Bootstrap", value: `![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-white?logo=bootstrap&logoColor=%237952B3)`,},
			{name: "jQuery", value: `![jQuery Badge](https://img.shields.io/badge/jQuery-white?logo=jquery&logoColor=%230769AD)`,},
			{name: "Node.js", value: `![Node.js Badge](https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=%#339933)`,},
			{name: "Next.js", value: `![Next.js Badge](https://img.shields.io/badge/Next.js-white?logo=next.js&logoColor=%23000000)`,},
			{name: "React.js", value: `![React.js Badge](https://img.shields.io/badge/React.js-white?logo=react&logoColor=%2361DAFB)`,},
		],
		validate(answer) {
			if (answer.length < 1) { 
			  return "You must choose at least one technology.";
			}
 			return true;
		},
	},
	{
		// Installation
		type: "input",
		name: "installation",
		message: "Describe how to install your project:",
		default: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
	},
	{
		// Usage
		type: "input",
		name: "usage",
		message: "Describe how to use your project:",
		default: "Provide instructions and examples for use.",
	},
	{
		// Deployed screenshot
		type: "input",
		name: "usage",
		message: "Provide a filepath for a screenshot of the deployed application:",
		default: "./assets/deployed_application.png",
	},
	{
		// License
		type: "list",
		name: "License",
		message: "Choose a license:",
		choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3", "Mozilla Public License 2.0", "The Unlicense"],
	},
	{
		// Contributors
		type: "input",
		name: "contributors",
		message: "List any contributors' github links:",
		default: "N/A",
	},
	{
		// Credits
		type: "input",
		name: "credits",
		message: "List any assets, links or credits:",
		default: "N/A",
	},
	{
		// Tests
		type: "input",
		name: "tests",
		message: "Describe any tests performed:",
		default: "N/A",
	},
	{
		// GitHub username
		type: "input",
		name: "githubUser",
		message: "Enter your github username:",
		default: "jg2002-j",
	},
	{
		// Email address
		type: "input",
		name: "emailAddress",
		message: "Enter your email address:",
		default: "jai.2002.gandhi@gmail.com",
	},
];

// function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (error) => error ? console.error(err) : console.log(`Success! ${fileName} has been created.`));}

// function to initialize program
function init() {
	// 1. ask questions
	console.log("\nHi, please create your README by answering the prompts below.\n")
	inquirer.prompt(questions).then((answers) => {
		// 2. record responses
		const readmeData = `
# ${answers.title}

## Description
${answers.description}

${answers.badges.join(" ")}

## License
${answers.license}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}
	![Deployed Application](${answers.screenshotLink})
	
## Contributors & Credits
### Contributors
${answers.contributors}
### Credits
${answers.credits}

## Tests
${answers.tests}

## Questions
Please contact me via [email](mailto:${answers.emailAddress}) or my GitHub:

[![My GitHub](https://img.shields.io/badge/${answers.githubUser}?style=flat&logo=github&labelColor=grey&color=white&logoColor=%23181717)](https://github.com/${answers.githubUser}) 
		`		
		// 3. write to file with responses
		writeToFile("generated_README.md", readmeData)

		console.log(answers);
	});
}

// function call to initialize program
init();






