import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Routes/Home";
import FutureWeather from "./Routes/FutureWeather";
import PastWeather from "./Routes/PastWeather";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState({});
  const API_KEY = "0176bd3b06bc5cd4dbec44d2a0089d6e";

  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    await setLocation({ latitude, longitude });
  };
  const handleGeoError = () => {
    console.log("error");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Route
          path="/"
          exact={true}
          render={() => (
            <Home
              lat={location.latitude}
              lon={location.longitude}
              API_KEY={API_KEY}
            />
          )}
        />
        <Route
          path="/future"
          render={() => (
            <FutureWeather
              lat={location.latitude}
              lon={location.longitude}
              API_KEY={API_KEY}
            />
          )}
        />
        <Route
          path="/past"
          render={() => (
            <PastWeather
              lat={location.latitude}
              lon={location.longitude}
              API_KEY={API_KEY}
            />
          )}
        />
      </HashRouter>
    </div>
  );
};

export default App;
