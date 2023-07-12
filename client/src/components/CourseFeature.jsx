import React from "react";
import classes from "./CourseFeature.module.css";
import { BsCheck2Circle } from "react-icons/bs";

const CourseFeature = () => {
  return (
    <div className={classes["course-feature"]}>
      <BsCheck2Circle className={classes.tick} />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default CourseFeature;
