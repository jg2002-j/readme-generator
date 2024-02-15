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


	// {badges: ""},

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
		message: "Please provide a filepath for a screenshot of the deployed application: ",
	},
	
	{
		// License
		type: "list",
		name: "License",
		message: "Please choose a license: ",
		choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
	},
	// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

	// Contributing
	{contributors: []},
	{credits: []},

	// Tests
	{tests: ""},

	// Questions
	// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
	{githubUser: ""},
	// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
	{emailAddress: ""},

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
		console.log('\nAnswers:');
		console.log(JSON.stringify(answers, null, '  '));
		// 3. write to file with responses
		writeToFile("README.md", readmeData)
	});
}

// function call to initialize program
init();







