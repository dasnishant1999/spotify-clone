import React, { useEffect, useState } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenUrl } from "./services/spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState(null);

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      settoken(_token);
      // console.log(token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
    return () => {};
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
