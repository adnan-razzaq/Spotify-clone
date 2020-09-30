import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new spotifyWebApi();
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  /* Run code based on a specific condition */
  useEffect(() => {
    const _token = getTokenFromResponse();

    //for security
    window.location.hash = "";

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcViWIq9dpQNl").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

//53660f0f58ec461682027dac224f8372
