const express = require("express");
const { seedUser } = require("../controllers/seedControllerjs");
const seedRouter = express.Router();

seedRouter.get("/users", seedUser);

module.exports = seedRouter;
