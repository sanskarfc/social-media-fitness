// require express
const express = require("express");
// create the express app
const app = express();

// require body-parser
const bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// require path
const path = require("path");
// setting our static folder directory
app.use(express.static(path.join(__dirname, "./public")));

