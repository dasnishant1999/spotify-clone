import React from "react";

import { Link } from "react-router-dom";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";

import "./Sidebar.css";
import SiderbarOption from "./SiderbarOption";
import { useDataLayerValue } from "../../provider/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo "
      />
      <Link to="/">
        <SiderbarOption text="Home" Icon={HomeRoundedIcon} />
      </Link>
      <Link to="/search">
        <SiderbarOption text="Search" Icon={SearchRoundedIcon} />
      </Link>
      <Link to="/collection">
        <SiderbarOption text="Your Library" Icon={LibraryMusicRoundedIcon} />
      </Link>
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      <div className="sidebar_playlist">
        {playlists?.items?.map((playlist) => (
          <SiderbarOption text={playlist.name}></SiderbarOption>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
