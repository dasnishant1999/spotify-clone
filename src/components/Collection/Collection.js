import React from "react";

import "./Collection.css";
import Header from "../Header/Header";
import PlaylistCard from "./PlaylistCard";
import { useDataLayerValue } from "../../provider/DataLayer";

function Collection({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists.items[0]);
  return (
    <div className="collection">
      <Header spotify={spotify} search />
      <h2>Playlists</h2>
      <div className="collection_playlists">
        {playlists?.items.map((playlist) => {
          return <PlaylistCard playlist={playlist} />;
        })}
      </div>
      <h2>Podcasts</h2>
      <div className="collection_podcasts">
        {playlists?.items.map((playlist) => {
          return <PlaylistCard playlist={playlist} />;
        })}
      </div>
      <h2>Artists</h2>
      <div className="collection_artists">
        {playlists?.items.map((playlist) => {
          return <PlaylistCard playlist={playlist} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
