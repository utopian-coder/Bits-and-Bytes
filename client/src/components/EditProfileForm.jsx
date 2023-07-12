import axios from "axios";
import React, { useContext, useRef } from "react";
import { UserContext } from "../store/UserContext";

import classes from "./EditProfileForm.module.css";

const EditProfileForm = ({ setEditProfileForm }) => {
  const formRef = useRef();
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const { data } = await axios.put(`/users/${user.id}`, formValues);
      if (data?.status != "success") throw new Error("Something went wrong");
      setUser({ ...data });
    } catch (error) {
      alert(error.message);
    }

    setEditProfileForm(false);
  };

  return (
    <div className={`container ${classes["form-container"]}`}>
      <form onSubmit={submitHandler} ref={formRef}>
        <input type='text' name='bio' placeholder='bio' />
        <input
          type='text'
          name='linkedin'
          placeholder='linkedin profile link'
        />
        <input type='text' name='github' placeholder='github profile link' />
        <input type='text' name='twitter' placeholder='twitter profile link' />
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
