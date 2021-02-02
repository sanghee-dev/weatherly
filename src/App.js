import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import FutureWeather from "Routes/FutureWeather";
import PastWeather from "Routes/PastWeather";
import Navigation from "Components/Navigation";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({});
  const API_KEY = "0176bd3b06bc5cd4dbec44d2a0089d6e";

  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    await setPosition({ latitude, longitude });
  };
  const handleGeoError = () => {
    console.log("error");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home
              lat={position.latitude}
              lon={position.longitude}
              API_KEY={API_KEY}
            />
          </Route>
          <Route path="/future">
            <FutureWeather
              lat={position.latitude}
              lon={position.longitude}
              API_KEY={API_KEY}
            />
          </Route>

          <Route
            path="/past"
            render={() => (
              <PastWeather
                lat={position.latitude}
                lon={position.longitude}
                API_KEY={API_KEY}
              />
            )}
          />
          <Redirect from="*" to="/" />
        </Switch>
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
