import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import classes from "./CourseDetails.module.css";

const CourseDetails = ({ course }) => {
  const { title, summary, cover, topics, price } = course;
  const topicList = topics.split(".");

  return (
    <article className={`flex-container ${classes["course-details-cotainer"]}`}>
      <div className={`flex-container ${classes["course-details"]}`}>
        <div className={`flex-container ${classes.header}`}>
          <h1 className='heading'>{title}</h1>
          <p>{summary}</p>
        </div>
        <div className={classes.image}>
          <img src={cover} alt={`${title} cover`} />
        </div>
        <div className={`flex-container ${classes.topics}`}>
          {topicList.map((curr) => (
            <span key={Math.random()}>
              <AiOutlineCheck />
              {curr}.
            </span>
          ))}
        </div>
        <div className={`flex-container ${classes.cta}`}>
          <span>${price}</span>
          <span>Full Lifetime Access</span>
        </div>
      </div>
      <Link to='/cart' className={`btn btn-primary`}>
        Buy The Course
      </Link>
    </article>
  );
};

export default CourseDetails;
