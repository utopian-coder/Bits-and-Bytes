import React, { useContext, useRef } from "react";
import classes from "./LogInSignUpPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../store/UserContext";

const LogInPage = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const { data } = await axios.post("/users/log-in", formValues);
      if (data.status != "success") throw new Error(`${data.message}`);
      setUser(data.data);
      navigate("/");
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <section className={`container ${classes["form-container"]}`}>
      <h1 className='heading'>Log In</h1>
      <form ref={formRef} onSubmit={submitHandler}>
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
          Log In
        </button>

        <Link to='/sign-up'>
          Don't have an account?{" "}
          <span className={classes.link}>Register here</span>
        </Link>
      </form>
    </section>
  );
};

export default LogInPage;
