import classes from "./CourseCard.module.css";
import React from "react";
import CourseFeature from "./CourseFeature";

const CourseCard = () => {
  return (
    <article className={classes["course-card"]}>
      <h4 className={classes["course-title"]}>Title</h4>
      <div className={classes.pricing}>
        <span>₹899</span>
        <p>Full Lifetime Acces</p>
      </div>
      <div className={classes["course-features-container"]}>
        <CourseFeature />
        <CourseFeature />
        <CourseFeature />
        <CourseFeature />
        <CourseFeature />
      </div>
      <button className={`btn ${classes["btn-course-card"]}`}>
        Add To Cart
      </button>
    </article>
  );
};

export default CourseCard;
