import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Player.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar></Sidebar>
        <Route exact path="/">
          <Body spotify={spotify}></Body>
        </Route>
        <Route path="/search">
          <Search spotify={spotify} />
        </Route>
        <Route path="/collection">
          <h2>Your library</h2>
        </Route>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Player;
