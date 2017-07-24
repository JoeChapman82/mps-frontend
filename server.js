/*jshint esversion: 6 */
require('dotenv').config();
const express = require('express');
const app = express();
require(__dirname + '/config')(app);
require(__dirname + '/routes')(app);

const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
    console.log('Server listening on port:' + PORT);
});


module.exports = app;
