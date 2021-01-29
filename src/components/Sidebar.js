import React from "react";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";

import "./Sidebar.css";
import SiderbarOption from "./SiderbarOption";
import { useDataLayerValue } from "../provider/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo "
      />
      <SiderbarOption text="Home" Icon={HomeRoundedIcon} />
      <SiderbarOption text="Search" Icon={SearchRoundedIcon} />
      <SiderbarOption text="Your Library" Icon={LibraryMusicRoundedIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SiderbarOption text={playlist.name}></SiderbarOption>
      ))}
    </div>
  );
}

export default Sidebar;
