import React, { useContext, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { LiaUserCircleSolid } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../store/UserContext";

const Header = () => {
  const [sidebarState, setSidebarState] = useState(false);

  const sidebarToggleHandler = () => {
    setSidebarState((prev) => (prev ? false : true));
  };

  const { user } = useContext(UserContext);

  return (
    <header className={classes["header-container"]}>
      <div className={classes["logo-container"]}>
        <RiMenu5Fill
          className={classes.hamburger}
          onClick={sidebarToggleHandler}
        />
        <Link to='/'>Bits & Bytes</Link>
      </div>

      {sidebarState && (
        <div className={classes.backdrop} onClick={sidebarToggleHandler} />
      )}

      <nav
        className={`${classes.navbar} ${
          sidebarState ? "" : classes["navbar-toggle"]
        }`}
      >
        {sidebarState && (
          <div className={classes["sidebar-cta"]}>
            <GrFormClose
              className={classes["close-nav-icon"]}
              onClick={sidebarToggleHandler}
            />
            <Link to='/log-in' onClick={sidebarToggleHandler}>
              Log In
            </Link>
            <Link to='/sign-up' onClick={sidebarToggleHandler}>
              Sign Up
            </Link>
          </div>
        )}
        <ul className={classes["nav-links"]}>
          <li>
            <Link to='/upcoming'>Why Us?</Link>
          </li>
          <li>
            <Link to='/upcoming'>Tools</Link>
          </li>
          <li>
            <Link to='/upcoming'>Courses</Link>
          </li>
        </ul>
      </nav>
      {!user && (
        <div className={classes.cta}>
          <Link to='/log-in' className='btn btn-transparent'>
            Log In
          </Link>
          <Link to='sign-up' className='btn btn-primary'>
            Sign Up
          </Link>
        </div>
      )}
      {user && (
        <div className={classes["logged-in-cta"]}>
          <div className={classes["nav-cart-wishlist-container"]}>
            <Link to='/cart'>
              <MdOutlineFavoriteBorder className={classes["cta-icon"]} />
            </Link>
            <Link to='/wishlist'>
              <AiOutlineShoppingCart className={classes["cta-icon"]} />
            </Link>
          </div>
          <Link to='/profile' className={classes["nav-profile-container"]}>
            <LiaUserCircleSolid className={classes["cta-icon"]} />
            <p>{user.name.split(" ").at(0)}</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
