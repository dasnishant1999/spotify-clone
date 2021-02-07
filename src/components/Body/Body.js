import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";
import SongRow from "./SongRow";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../provider/DataLayer";

function Body({ spotify }) {
  const [{ playlist, user }, dispatch] = useDataLayerValue();
  // console.log(useParams());
  // console.log(useParams().id);
  var id = useParams().id;

  useEffect(() => {
    spotify.getPlaylist(id).then((response) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: response,
      });
    });
    return () => {};
  }, [id]);

  return (
    <div className="body">
      <Header spotify={spotify} search />

      <div className="body_info">
        <img src={playlist?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
          <h5>{user?.display_name}</h5>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_play" />
          <MoreHorizIcon className="body_more_options" />
        </div>
        {playlist?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
