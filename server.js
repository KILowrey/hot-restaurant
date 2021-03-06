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

// Reservations (DATA)
// =====================================
let reservations = [];

// Display all Reservations
// =====================================
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Create New Reservations
// =====================================
app.post("/api/reservations", function(req, res) {
  let newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});

// Basic Routes
// =====================================
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./pages/tables.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./pages/reserve.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./pages/home.html"));
});

// Starts the server to begin listening
// =====================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});