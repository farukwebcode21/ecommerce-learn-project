const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const connectDatabase = async (option = {}) => {
  try {
    await mongoose.connect(mongodbURL, option);
    console.log("connection to mongodb successfully");
  } catch (error) {
    console.log("Could not connect database", error.toString());
  }
};

module.exports = connectDatabase;
