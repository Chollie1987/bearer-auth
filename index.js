'use strict';
const { start } = require('./src/server.js');
// Start up DB Server
const { db } = require('./src/auth/models/index.js');

db.sync()
  .then(() => {
  start(process.env.PORT);
  // Start the web server
  }).catch(error => {
    console.log(error);
  });

