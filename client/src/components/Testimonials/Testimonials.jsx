import React from "react";
import classes from "./Testimonials.module.css";
import user1 from "../../assets/Testimonials/avatar1.jpg";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className={classes["testimonial-container"]}>
      <article className={classes.testimonials}>
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
        <TestimonialItem imageSource={user1} />
      </article>
    </section>
  );
};

export default Testimonials;
