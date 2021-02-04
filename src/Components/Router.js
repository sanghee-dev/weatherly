import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import FutureWeather from "Routes/FutureWeather";
import PastWeather from "Routes/PastWeather";

const Router = () => {
  const [position, setPosition] = useState({});
  const API_KEY = "0176bd3b06bc5cd4dbec44d2a0089d6e";

  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    setPosition({ latitude, longitude });
  };
  const handleGeoError = () => {
    console.log("error");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              lat={position.latitude}
              lon={position.longitude}
              API_KEY={API_KEY}
            />
          </Route>
          <Route path="/Future">
            <FutureWeather
              lat={position.latitude}
              lon={position.longitude}
              API_KEY={API_KEY}
            />
          </Route>
          <Route path="/Past">
            <PastWeather
              lat={position.latitude}
              lon={position.longitude}
              API_KEY={API_KEY}
            />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
