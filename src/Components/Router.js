import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import FutureWeather from "Routes/Future";
import PastWeather from "Routes/Past";

const Router = () => {
  const [position, setPosition] = useState();
  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    setPosition({ latitude, longitude });
  };
  const handleGeoError = () => {
    console.log("error");
  };
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home position={position} />
          </Route>
          <Route path="/Future">
            <FutureWeather position={position} />
          </Route>
          <Route path="/Past">
            <PastWeather position={position} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
