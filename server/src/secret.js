require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 5001;
const mongodbURL =
  process.MONGODB_ATLAS || "mongodb://localhost:27017/ecommerceMern";

module.exports = { serverPort, mongodbURL };
