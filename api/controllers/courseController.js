const { mongoose } = require("mongoose");

const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");

const Course = require("../models/Course");
const getDataFromJWT = require("../utils/getDataFromJWT");

const DB = process.env.DB.replace("<password>", process.env.PASSWORD);

exports.createCourse = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const { token } = req.cookies;
  const userData = await getDataFromJWT(token);

  const { title, topics, price, catagory, cover } = req.body;

  const course = await Course.create({
    title,
    topics,
    price,
    catagory,
    cover,
    instructor: userData.id,
  });

  res.status(201).json({
    status: "success",
    data: {
      course,
    },
  });
});

exports.updateCourse = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const { token } = req.cookies;
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) {
    return next(new AppError("Course not found", 404));
  }

  //Check if current user is the same as course instructor
  const userData = await getDataFromJWT(token);

  if (userData.id != course.instructor.toString()) {
    return next(
      new AppError("You don't have permission to modify this course!", 403)
    );
  }

  //Update and return updated object
  const { title, topics, price, catagory, cover } = req.body;

  await course.updateOne(
    { title, topics, price, catagory, cover },
    { new: true }
  );

  //TODO: stop returning doc when in prod, return success message instead

  const updateCourse = await Course.findById(id);

  res.status(201).json({
    status: "success",
    data: {
      course: updateCourse,
    },
  });
});

exports.getAllCourses = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const courses = await Course.find().populate("instructor", [
    "name",
    "github",
    "linkedin",
    "twitter",
  ]);

  if (!courses) {
    return next(new AppError("No course found", 404));
  }

  res.status(200).json({
    status: "success",
    results: courses.length,
    data: {
      courses,
    },
  });
});

exports.getCourse = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const { id } = req.params;
  const course = await Course.findById(id).populate("instructor", [
    "name",
    "github",
    "linkedin",
    "twitter",
  ]);

  if (!course) {
    return next(new AppError("No course found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      course,
    },
  });
});

exports.deleteCourse = catchAsync(async (req, res, next) => {
  mongoose.connect(DB);

  const { id } = req.params;
  const { token } = req.cookies;
  const course = await Course.findById(id);

  const userData = await getDataFromJWT(token);

  if (userData.id != course.instructor.toString()) {
    return next(
      new AppError("You don't have permission to modify this course!", 403)
    );
  }

  await course.deleteOne();

  res.status(204).json({
    status: "success",
    message: "Successfully deleted!",
  });
});
