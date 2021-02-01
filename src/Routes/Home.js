import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Home = ({ lat = "37", lon = "127", API_KEY }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const getWeather = async (API) => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    const {
      name,
      main: { temp, humidity },
      weather: [{ main: condition, description }],
      wind: { speed },
    } = await json;
    await setLocation(name);
    await setWeather({
      temp,
      humidity,
      condition,
      description,
      speed,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getWeather(API);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="Home">
      <h1>{location}</h1>
      <h4>description : {weather.description}</h4>
      <h4>temp : {weather.temp}°</h4>
      <h4>weather : {weather.condition}</h4>
      <h4>wind : {weather.speed}km/h</h4>
      <h4>humidity : {weather.humidity}%</h4>
    </div>
  );
};

export default withRouter(Home);
