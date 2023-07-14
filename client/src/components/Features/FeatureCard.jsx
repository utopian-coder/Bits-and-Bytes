import React from "react";
import classes from "./FeatureCard.module.css";

const FeatureCard = ({ features }) => {
  return (
    <article className={classes.card}>
      <h4>{features.title}</h4>
      <p>{features.description}</p>
    </article>
  );
};

export default FeatureCard;
