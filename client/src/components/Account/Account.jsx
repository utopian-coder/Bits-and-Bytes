import React, { useContext, useState } from "react";
import classes from "./Account.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import EditProfileForm from "./EditProfileForm";

const Account = () => {
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logOutHandler = async () => {
    try {
      const { data } = await axios.post("/users/log-out");
      if (data?.status != "success")
        throw new Error("Something went wrong, try again!");
      setUser(null);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(editProfile);
  return (
    <>
      <section className={classes.account}>
        <div className={`container ${classes["profile-container"]}`}>
          <aside>
            <ul className={classes["profile-nav"]}>
              <li className={classes["profile-nav-link"]}>
                <a>Profile</a>
              </li>
              <li className={classes["profile-nav-link"]}>
                <a onClick={() => setEditProfile(true)}>Edit Profile</a>
              </li>
              <li className={classes["profile-nav-link"]}>
                <a onClick={logOutHandler}>Log Out</a>
              </li>
            </ul>
          </aside>
          <div className={classes["profile-info-container"]}>
            <article className={classes["profile-info-cards"]}>dsdsd</article>
            <article className={classes["profile-info-cards"]}>sdsdsd</article>
          </div>
        </div>
        {editProfile && <EditProfileForm setEditProfileForm={setEditProfile} />}
      </section>
    </>
  );
};

export default Account;
