import React, { useRef } from "react";
import classes from "./LogInSignUpPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const { data } = await axios.post("/users", formValues);
      if (data.status != "success")
        throw new Error("Registration failed, try again!");

      alert("Registration Successfull, now you can log in.");
      navigate("/log-in");
    } catch (error) {
      alert("Something went wrong, try again!");
    }
  };

  return (
    <div className={`container ${classes["form-container"]}`}>
      <h1 className='heading'>Register</h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='your name'
          className={classes.input}
          required
        />

        <input
          type='email'
          name='email'
          placeholder='email'
          className={classes.input}
          required
        />
        <input
          type='text'
          name='password'
          placeholder='password'
          className={classes.input}
          required
        />
        <button className={`${classes["btn-form"]} btn btn-primary`}>
          Sign Up
        </button>

        <Link to='/log-in'>
          Already a user? <span className={classes.link}>Log in</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
