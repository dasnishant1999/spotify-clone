import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./provider/DataLayer";
import { getTokenUrl } from "./services/spotify";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, settoken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // settoken(_token);
      // console.log(token); //dont know why not working, need to figure out this one in future
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        // console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return (
    <>
      <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    </>
  );
}

export default App;
