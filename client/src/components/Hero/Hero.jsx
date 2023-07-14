import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-image.jpg";
import Waves from "../../assets/waves.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section
        className={`container ${classes["hero-container"]} ${classes["animation-section"]}
      `}
      >
        <div className={classes["hero-content"]}>
          <h1 className={`heading ${classes["hero-heading"]}`}>
            Learn to Code{" "}
            <span className={classes["heading-span"]}>effectively</span>
          </h1>
          <div className={classes["hero-cta"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quasi quisquam, ipsam ex id cum.
            </p>
            <Link to='/upcoming' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
        <div className={classes["hero-image"]}>
          <img src={HeroImage} alt='coding human' />
        </div>
      </section>
      <div className={classes.waves}>
        <img src={Waves} alt='' />
      </div>
    </>
  );
};

export default Hero;
