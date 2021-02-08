import React from "react";
import { useDataLayerValue } from "../../provider/DataLayer";

import Header from "../Header/Header";
import "./Home.css";

function Home({ spotify }) {
  const [{ recentlyPlayed }] = useDataLayerValue();
  return (
    <div className="home">
      <Header spotify={spotify} search />

      <h2>Recently played</h2>

      <div className="home_recently_played">
        {recentlyPlayed?.items?.slice(0,5)?.map((recentlyPlayed) => {
          return (
            <div className="recentlyPlayedCard" key={recentlyPlayed.track.id}>
              <img
                src={recentlyPlayed.track.album.images[0].url}
                alt="recentlyPlayed_img"
              />
              <h4>{recentlyPlayed.track.name}</h4>
              <p>{recentlyPlayed.track.artists[0].name},...</p>
            </div>
          );

          // recentlyPlayed.track.name
          // recentlyPlayed.track.artists[0].name
          // recentlyPlayed.track.album.images[0].url
        })}
      </div>
    </div>
  );
}

export default Home;
