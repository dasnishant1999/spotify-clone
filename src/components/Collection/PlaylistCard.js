import React from "react";

import "./PlaylistCard.css";

function PlaylistCard({ playlist }) {
  return (
    <div className="playlistCard" key={playlist.id}>
      <img src={playlist.images[0].url} alt="playlist_img" />
      <h4>{playlist.name}</h4>
      <p>{playlist.description || playlist.owner.display_name}</p>
    </div>
  );
}

export default PlaylistCard;
