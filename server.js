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
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Starts the server to begin listening
// =====================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});