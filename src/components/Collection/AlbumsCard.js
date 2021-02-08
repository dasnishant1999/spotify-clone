import React from "react";

import "./AlbumsCard.css";

function AlbumsCard({album}) {
  return (
    <div className="albumsCard">
      <img src={album.album.images[0].url} alt="album_img" />
      <h4>{album.album.name}</h4>
      <p>{album.album.artists[0].name},...</p>
    </div>
  );
}

export default AlbumsCard;
