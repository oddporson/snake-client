const { connect } = require('./client'); // in client.js, module.export = { connect }. This is object destructuring.
console.log('Connecting ...');
connect();

// This option also works:
// const connect = require('./client'); // in client.js, module.export = connnect
// console.log('Connecting ...');
// connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', handleUserInput);
  
  return stdin;
}
setupInput()
