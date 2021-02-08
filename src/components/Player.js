import React from "react";

import { Route, Switch } from "react-router-dom";

import "./Player.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import Collection from "./Collection/Collection";
import Home from "./Home/Home";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home/>
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
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Player;
