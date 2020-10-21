# Framework Details
REST API-Test Automation Framework using Mocha-Chai

### Mocha

Mocha is a feature-rich JavaScript test framework running on Node Js.The framework is designed to work in any arbitrary environment and for any kind of task. It is independent from any 3rd party frameworks and only requires Node

### Chai
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.The interface used in this framework is assert.

### JS-Javascript

Mocha Scripts written entirely in JavaScript.

### Reporting

Mochawesome is a custom reporter for use with the Javascript testing framework, mocha & and works in conjunction with mochawesome-report-generator to generate a standalone HTML/CSS report to help visualize your test runs.



# To run the framework use following steps:-
1. Check if you have a version of `Node.js` already installed on you mac machine.If not,install Node.js from https://nodejs.org/ 
2. Clone this repository using `git@github.com:bbc/test.git`
3. Run command `npm install`, to install all dependencies.
4. Run command `npm run test`
5. After tests finish results will be created in mochawesome-report folder in both JSON & HTML format. Run `npm run open:report` to open in browser directly
