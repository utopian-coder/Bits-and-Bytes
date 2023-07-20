const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  instructor: {
    type: String,
    required: true,
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
    required: true,
  },
});

const Course = model("Course", courseSchema);
module.exports = Course;
