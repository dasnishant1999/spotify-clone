import React, { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./provider/DataLayer";
import { getTokenUrl } from "./services/spotify";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, settoken] = useState(null);
  const [{ playlists, playlist, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
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
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // spotify.getPlaylist("3KGcxceXs3pNhq5WJW0HyE").then((response) => {
      //   dispatch({
      //     type: "SET_PLAYLIST",
      //     playlist: response,
      //   });
      // });
    }
  }, []);
  console.log(playlists);
  console.log(playlist);

  return (
    <>
      <Router>
        <Switch>
          <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
