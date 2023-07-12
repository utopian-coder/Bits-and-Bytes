const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Every user must have a name."],
  },

  email: {
    type: String,
    required: [true, "Every user must have a name."],
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  bio: String,

  linkedin: String,

  github: String,

  twitter: String,
});

const User = model("User", userSchema);
module.exports = User;
