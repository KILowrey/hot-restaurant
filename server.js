// Dependencies
// =====================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =====================================
const app = express();
const PORT = 8000

// Sets up the Express app to handle data parsing
// =====================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =====================================
// routes code here

// Starts the server to begin listening
// =====================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});