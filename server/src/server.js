const express = require("express");
const app = express();
const port = 3000;

// Sample data

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
