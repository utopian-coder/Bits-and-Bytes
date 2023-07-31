import React from "react";
import classes from "./CourseCardWithCover.module.css";
import { Link } from "react-router-dom";

const CourseCardWithCover = ({ id, cover, title, summary, author, price }) => {
  return (
    <Link to={`/courses/${id}`}>
      <article className={`${classes.card} ${classes["flex-container"]}`}>
        <div className={classes.image}>
          <img src={cover} alt={`${title} cover`} />
        </div>
        <div className={`${classes["flex-container"]} ${classes.content}`}>
          <h5>{title}</h5>
          <p>{summary}</p>
          <span>By {author}</span>
        </div>
        <a className={`btn btn-primary ${classes["cta"]}`}>
          Add To Cart ${price}
        </a>
      </article>
    </Link>
  );
};

export default CourseCardWithCover;
