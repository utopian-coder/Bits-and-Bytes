import React from "react";
import classes from "./TestimonialItem.module.css";

const TestimonialItem = ({ imageSource }) => {
  return (
    <article className={classes.testimonial}>
      <img src={imageSource} alt='user' className={classes["profile-img"]} />
      <h3>Name</h3>
      <span>Software engineer @Google</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        pariatur eum sequi nulla. Error, unde.
      </p>
    </article>
  );
};

export default TestimonialItem;
