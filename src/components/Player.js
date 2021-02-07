import React from "react";

import { Route } from "react-router-dom";

import "./Player.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import Collection from "./Collection/Collection";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar></Sidebar>
        <Route exact path="/">
          <h2>i am home</h2>
        </Route>
        <Route path="/search">
          <Search spotify={spotify} />
        </Route>
        <Route path="/collection">
          <Collection spotify={spotify} />
        </Route>
        <Route
          path="/playlist/:id"
          children={<Body spotify={spotify}></Body>}
        ></Route>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Player;
