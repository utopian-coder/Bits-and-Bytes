import React from "react";
import classes from "./Testimonials.module.css";
import user1 from "../../assets/Testimonials/avatar1.jpg";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className={classes["testimonial-container"]}>
      <h2 className='heading'>What our previous students say?</h2>
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
