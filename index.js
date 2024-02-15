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
		message: "Enter a title for your project: ",
	},
	{
		// Description
		type: "input",
		name: "description",
		message: "Enter a description of your project: ",
	},
	{
		// Tech Badges
		type: "checkbox",
		name: "badges",
		message: "Choose all the technologies you used: ",
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
		]
	},
	{
		// Installation
		type: "input",
		name: "installation",
		message: "Describe how to install your project: ",
	},

	{
		// Usage
		type: "input",
		name: "usage",
		message: "Describe how to use your project: ",
	},
	{
		// Screenshot
		type: "input",
		name: "usage",
		message: "Provide a filepath for a screenshot of the deployed application: ",
	},
	
	{
		// License
		type: "list",
		name: "License",
		message: "Choose a license: ",
		choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
	},
	// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

	{
		// Contributing
		type: "input",
		name: "contributors",
		message: "List any contributors' github links: "
	},
	{
		type: "input",
		name: "credits",
		message: "List any assets, links or credits: "
	},
	{
		// Tests
		type: "input",
		name: "tests",
		message: "Describe any tests performed: "
	},
	{
		// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
		type: "input",
		name: "githubUser",
		message: "Enter your github username: "
	},
	{
		// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
		type: "input",
		name: "emailAddress",
		message: "Enter your email address: "
	},
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => error ? console.error(err) : console.log(`Success! ${fileName} has been created.`));
}

// function to initialize program
function init() {
	// 1. ask questions
	console.log("Hi, please create your README by answering the prompts below.\n")
	inquirer.prompt(questions).then((answers) => {
		// 2. record responses
		const readmeData = `
		# ${answers.title}
		
		## Description
		${answers.description}
		
		${answers.badges.join(" ")}
		
		## Table of Contents
		- [Installation](#installation)
		- [Usage](#usage)
		- [Credits](#credits)
		- [License](#license)
		- [Questions](#questions)
		- [Tests](#tests)
		
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
		
		## License
		${answers.license}
		
		## Questions
		Please contact me for any questions:
		[![My GitHub](https://img.shields.io/badge/${answers.githubUser}-white?logo=github&logoColor=%23181717)](https://github.com/${answers.githubUser}) 
		[![My Email](https://img.shields.io/badge/${answers.emailAddress}-white?logo=maildotru&logoColor=%23005FF9)](mailto:${answers.emailAddress}) 
		`		
		// 3. write to file with responses
		writeToFile("generated_README.md", readmeData)
	});
}

// function call to initialize program
init();






