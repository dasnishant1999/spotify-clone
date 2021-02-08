import React from "react";

import "./Collection.css";
import Header from "../Header/Header";
import PlaylistCard from "./PlaylistCard";
import { useDataLayerValue } from "../../provider/DataLayer";
import ArtistCard from "./ArtistCard";

function Collection({ spotify }) {
  const [{ artists,playlists }, ] = useDataLayerValue();
  return (
    <div className="collection">
      <Header spotify={spotify} search />
      <h2>Playlists</h2>
      <div className="collection_playlists">
        {playlists?.items.map((playlist) => {
          return <PlaylistCard playlist={playlist} key={playlist.id}/>;
        })}
      </div>
      <h2>Podcasts</h2>
      <h2>Artists</h2>
      <div className="collection_artists">
        {artists?.artists?.items.map((artist) => {
          return <ArtistCard artist={artist} key={artist.id}/>;
        })}
      </div>
    </div>
  );
}

export default Collection;
