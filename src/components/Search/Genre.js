import React from "react";

import "./Genre.css";

function Genre({ genre }) {
  return (
    <div
      className="genre"
      style={{
        background: `linear-gradient(370deg, ${genre.color1}, ${genre.color2})`,
      }}
    >
      <h2>{genre.text}</h2>
    </div>
  );
}

export default Genre;
