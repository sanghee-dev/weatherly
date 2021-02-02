import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Time from "Components/Time";
import { IoSunnyOutline } from "react-icons/io5";

const Home = ({ lat = "37", lon = "127", API_KEY }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const getWeather = async (API) => {
    const response = await fetch(API);
    const json = await response.json();
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
    <div className="Home  screen">
      <h1>{location}!</h1>
      <h2>{weather.description}</h2>
      <h1>{weather.temp}°</h1>
      <h1>Weather : {weather.condition}</h1>
      <div className="Home__info">
        <div>
          <h3>wind</h3>
          <h2>{weather.speed}km/h</h2>
        </div>
        <div>
          <h3>humidity</h3>
          <h2>{weather.humidity}%</h2>
        </div>
      </div>
      <div className="Home__record">
        <IoSunnyOutline />
        <IoSunnyOutline />
        <Time />
        <IoSunnyOutline />
        <IoSunnyOutline />
      </div>
    </div>
  );
};

export default withRouter(Home);
