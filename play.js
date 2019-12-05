const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();
setupInput(conn);

// This option also works:
// const connect = require('./client'); // in client.js, module.export = connnect
// console.log('Connecting ...');
// connect();

/**a
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

