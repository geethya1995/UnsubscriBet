const express = require("express");
const app = express();
// const bodyParser = require('body-parser');

// body parser configuration
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Server is up and running!" });
  next();
});


module.exports = app;