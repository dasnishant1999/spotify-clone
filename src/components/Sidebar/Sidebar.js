import React from "react";

import { Link } from "react-router-dom";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";

import "./Sidebar.css";
import SiderbarOption from "./SiderbarOption";
import { useDataLayerValue } from "../../provider/DataLayer";

function Sidebar() {
  const [{ playlists }, ] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <SiderbarOption text="Home" Icon={HomeRoundedIcon} />
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <SiderbarOption text="Search" Icon={SearchRoundedIcon} />
      </Link>
      <Link to="/collection" style={{ textDecoration: "none" }}>
        <SiderbarOption text="Your Library" Icon={LibraryMusicRoundedIcon} />
      </Link>
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      <div className="sidebar_playlist">
        {playlists?.items?.map((playlist) => (
          <Link
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            style={{ textDecoration: "none" }}
          >
            <SiderbarOption text={playlist.name}></SiderbarOption>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
