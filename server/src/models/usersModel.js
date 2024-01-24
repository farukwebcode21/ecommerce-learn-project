const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minlength: [3, " Your name must be theree cracter"],
    maxlength: [31, "User name length can be maximum 31 character"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
    trim: true,
    unique: true,
    lowercase: true,
  },
});

const User = model("Users", userSchema);
module.exports = User;
