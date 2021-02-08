import React from "react";

import Header from "../Header/Header";
import Genre from "./Genre";
import "./Search.css";
import { genres } from "./GenresData";

function Search({ spotify }) {
  return (
    <div className="search">
      <Header spotify={spotify} search />
      <div className="search_genre">
        {genres.map((item) => {
          return <Genre genre={item} key={item.text}/>;
        })}
      </div>
    </div>
  );
}

export default Search;
