import React from "react";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import classes from "./Footer.module.css";
import Wave from "../../assets/Wave";

const Footer = () => {
  return (
    <>
      <div className={classes.wave}>
        <Wave />
      </div>
      <footer className={classes.footer}>
        <div className={classes["footer-main-content"]}>
          <article className={classes["flex-container"]}>
            <Link to='/'>
              <h3 className={classes.logo}>Bits & Bytes</h3>
            </Link>
            <p>
              A beginner-friendly coding platform designed to help you acquire
              programming skills and knowledge for a successful learning
              journey.
            </p>
            <Link to='/upcoming' className={classes.playstore}>
              <BiLogoPlayStore className={classes.icon} />
              <span>Get Our App</span>
            </Link>
          </article>
          <article className={classes["flex-container"]}>
            <h4>Get In Touch</h4>
            <div className={classes["contact-links"]}>
              <Link to='/upcoming'>Help and Support</Link>
              <Link to='/upcoming'>Careers</Link>
              <Link to='/upcoming'>Blog</Link>
              <Link to='/upcoming'>Bug Bounty</Link>
            </div>
          </article>
          <article className={classes["flex-container"]}>
            <h4>Community</h4>
            <div className={classes["community-links"]}>
              <Link to='/upcoming'>Blog</Link>
              <div className={classes["social-links"]}>
                <a href='https://www.linkedin.com/in/imranbiswas/'>
                  <FaLinkedinIn className={classes["social-icons"]} />
                </a>
                <a href='https://twitter.com/imran_biswas22'>
                  {" "}
                  <FaTwitter className={classes["social-icons"]} />
                </a>
                <a href='https://www.facebook.com/imran.biswas.73700'>
                  <FaFacebookF className={classes["social-icons"]} />
                </a>
                <a href='https://www.instagram.com/___utopian_/'>
                  <FaInstagram className={classes["social-icons"]} />
                </a>
              </div>
            </div>
          </article>
        </div>
        <article className={classes.copyright}>
          <p>Copyright &copy; 2023 Imran Biswas</p>
          <div className={classes.terms}>
            <Link to='upcoming'>Terms & Conditions</Link>
            <Link to='upcoming'>Privacy Policy</Link>
          </div>
        </article>
      </footer>
    </>
  );
};

export default Footer;
