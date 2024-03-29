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
		name: "screenshot",
		message: "Provide a filepath for a screenshot of the deployed application:",
		default: "./assets/deployed_application.png",
	},
	{
		// License
		type: "list",
		name: "license",
		message: "Choose a license:",
		choices: ["Apache License 2.0","GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3", "Mozilla Public License 2.0", "The Unlicense"],
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
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (error) => error ? console.error(err) : console.log(`\nSuccess! ${fileName} has been created.\n`));}

// function to initialize program
function init() {
	// 1. ask questions
	console.log("\nHi, please create your README by answering the prompts below.\n")
	inquirer.prompt(questions).then((answers) => {
		// 1.5 get corresponding badge for the license
		const licensebadges = [
			{name: "Apache License 2.0", badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,}, 
			{name: "GNU General Public License v3.0", badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,}, 
			{name: "MIT License", badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,}, 
			{name: "BSD 2-Clause 'Simplified' License", badge: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,}, 
			{name: "BSD 3-Clause 'New' or 'Revised' License", badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,}, 
			{name: "Boost Software License 1.0", badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,}, 
			{name: "Creative Commons Zero v1.0 Universal", badge: `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,}, 
			{name: "Eclipse Public License 2.0", badge: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,}, 
			{name: "GNU Affero General Public License v3.0", badge: `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,}, 
			{name: "GNU General Public License v2.0", badge: `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,}, 
			{name: "GNU Lesser General Public License v3", badge: `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,}, 
			{name: "Mozilla Public License 2.0", badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,}, 
			{name: "The Unlicense", badge: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,},
		];
		const matchingbadge = licensebadges.find((badgeobj) => badgeobj.name == answers.license)
		// 2. record responses
		const readmeData = `
# ${answers.title}

## Description
${answers.description}

${answers.badges.join(" ")}

${matchingbadge.badge}

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
Please contact me if you have any questions:

[![My Email](https://img.shields.io/badge/My%20Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:${answers.emailAddress})
[![My GitHub](https://img.shields.io/badge/My%20GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/${answers.githubUser}) 
		`		
		// 3. write to file with responses
		writeToFile("generated_README.md", readmeData)
	});
}

// function call to initialize program
init();