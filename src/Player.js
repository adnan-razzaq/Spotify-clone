import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Bodi from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Bodi spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
