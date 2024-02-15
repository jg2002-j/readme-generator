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
	// When a user enters the project title, it's displayed as the title of the README.

	{description: ""},
	// Description
	// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

	{title: ""},
	// Table of Contents
	// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

	{title: ""},
	// Installation

	{title: ""},
	// Usage

	{title: ""},
	// License
	// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

	{title: ""},
	// Contributing

	{title: ""},
	// Tests

	{title: ""},
	// Questions
	// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
	// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();







