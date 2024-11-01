const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.development" });

// Generating the connection URL
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const connectionURL = `mongodb+srv://${username}:${password}@cluster0.xhsoa.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectDB() {
  mongoose
    .connect(connectionURL)
    .then(() => {
      console.log("Successfully connected to the database!");
    })
    .catch((error) => {
      console.log(
        "Unable to connect to the database. Recheck the database credentials."
      );
      console.error(error);
    });
}

module.exports = connectDB;
