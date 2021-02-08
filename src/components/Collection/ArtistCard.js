import React from "react";

import "./ArtistCard.css";

function ArtistCard({ artist }) {
  return (
    <div className="artistCard">
      <img src={artist.images[0].url} alt="artist_img" />
      <h4>{artist.name}</h4>
      <p>{artist.type}</p>
    </div>
  );
}

export default ArtistCard;
