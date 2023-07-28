const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");

router
  .route("/")
  .post(courseController.createCourse)
  .get(courseController.getAllCourses);

router
  .route("/:id")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
