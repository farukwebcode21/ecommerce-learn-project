const createError = require("http-errors");
const items = require("../models/usersModel");

const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "Users were return",
      users: items,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
