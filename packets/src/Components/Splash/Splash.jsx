import React from "react";
import "./Splash.scss";
import "../Login/Login";
import Login from "../Login/Login";

function Home() {
  return (
    <div className="wrapper">
      <div className="Logo">LOGO</div>
      <div className="formContainer">
        <Login />
      </div>
    </div>
  );
}

export default Home;
