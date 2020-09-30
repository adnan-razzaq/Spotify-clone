import React from "react";
import logo from "./Spotify_Logo_RGB_White.png";
import "./Login.css";
import { accessUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="login-logo" />
      <a href={accessUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;
