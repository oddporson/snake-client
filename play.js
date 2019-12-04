const { connect } = require('./client'); // in client.js, module.export = { connect }. This is object destructuring.
console.log('Connecting ...');
connect();

// This option also works:
// const connect = require('./client'); // in client.js, module.export = connnect
// console.log('Connecting ...');
// connect();
