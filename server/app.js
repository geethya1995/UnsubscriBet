const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle CORS errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// connecting to the database
connectDB();

app.get("/", (request, response, next) => {
  response.json({ message: "Server is up and running!" });
  next();
});

app.use("/", require("./routes/subscribeRoutes"));

module.exports = app;
