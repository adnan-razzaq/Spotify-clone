import React from "react";
import "./Sidebar.css";
import SideBarOption from "./SideBarOption";
import img from "./Spotify_Logo_RGB_Green.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img src={img} alt="" className="sidebar__logo" />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist, id) => (
        <SideBarOption key={id} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
