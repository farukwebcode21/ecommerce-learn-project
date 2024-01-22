const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Sample data

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let items = [
  { id: 1, name: "Item 1", description: "Testing Json Data" },
  { id: 2, name: "Item 2", description: "Testing Json Data" },
];

const isLoggedIn = (req, res, next) => {
  console.log("isLoggedIn Middleware");
  next();
};
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

app.get("/api/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    items,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
