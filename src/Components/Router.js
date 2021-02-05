import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import Future from "Routes/Future";
import Past from "Routes/Past";

const Router = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    setLatitude(latitude);
    setLongitude(longitude);
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
            <Home lat={latitude} lon={longitude} />
          </Route>
          <Route path="/Future">
            <Future lat={latitude} lon={longitude} />
          </Route>
          <Route path="/Past">
            <Past lat={latitude} lon={longitude} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
