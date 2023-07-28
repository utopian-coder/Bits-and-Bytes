const mongoose = require("mongoose");
const User = require("./User");
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  instructor: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  title: {
    type: String,
    required: true,
  },
  topics: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    // required: true,
  },
});

const Course = model("Course", courseSchema);
module.exports = Course;
