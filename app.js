const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to the database
connectDB();

app.get("/", (request, response, next) => {
  response.json({ message: "Server is up and running!" });
  next();
});

app.use("/api", require("./routes/subscribeRoutes"));

module.exports = app;
