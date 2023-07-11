import React from "react";
import classes from "./Features.module.css";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Feature2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
  {
    title: "Feature3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
  {
    title: "Feature4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
  {
    title: "Feature5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
  {
    title: "Feature6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
  {
    title: "Feature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at. Voluptatum voluptatibus nulla temporibus earum modi esse asperiores, deleniti deserunt.",
  },
];

const Features = () => {
  return (
    <section className={`container ${classes["feature-container"]}`}>
      <h2 className='heading'>Why Bits & Bytes?</h2>
      <div className={classes["feature-content"]}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} features={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
