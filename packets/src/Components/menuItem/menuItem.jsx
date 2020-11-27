import React from "react";
import "./MenuItem.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedOut } from "../../actions";

export default function MenuItem({ Icon, title, link, isSignOut }) {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(setUserLoggedOut());
  };
  return (
    <div className={`MenuItem ${isSignOut ? "signout" : ""}`}>
      {Icon && <Icon className="menuItem_icon" />}
      <Link
        to={link === "/" ? `/` : `/panel/${link}`}
        onClick={isSignOut ? signOut : ""}
      >
        {title}
      </Link>
    </div>
  );
}
