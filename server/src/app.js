const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const app = express();
const port = 3000;

// Sample data

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let items = [
  { id: 1, name: "Item 1", description: "Testing Json Data" },
  { id: 2, name: "Item 2", description: "Testing Json Data" },
];

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is Running ",
  });
});

app.get("/test", (req, res) => {
  res.status(200).send({
    items,
  });
});

app.get("/api/user", (req, res) => {
  res.status(200).send({
    items,
  });
});

// // client error handling
// app.use((req, res, next) => {
//   res.status(404).json({ message: "route not fount" });
//   next();
// });

// http error
app.use((req, res, next) => {
  next(createError(404, "route not fond http error"));
});

// // server error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// server error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
