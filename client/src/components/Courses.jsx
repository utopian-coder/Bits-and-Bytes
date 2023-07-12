import React from "react";
import CourseCard from "./CourseCard";
import classes from "./Courses.module.css";

const Courses = () => {
  return (
    <>
      <section className={"container"}>
        <h2 className='heading'>Get started...</h2>
        <div className={classes["course-container"]}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className={classes.explore}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            labore nemo voluptates iusto adipisci provident saepe laboriosam
            quis minima aut?
          </p>
          <button className='btn btn-primary'>Explore More Courses</button>
        </div>
      </section>
    </>
  );
};

export default Courses;
