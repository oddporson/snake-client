const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

// const { setUpInput } = require('./input')
// const { connect } = require('./client'); // in client.js, module.export = { connect }. This is object destructuring.
// console.log('Connecting ...');
// connect();

// This option also works:
// const connect = require('./client'); // in client.js, module.export = connnect
// console.log('Connecting ...');
// connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

