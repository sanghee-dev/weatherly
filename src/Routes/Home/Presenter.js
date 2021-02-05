import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import Time from "Components/Time";

const Presenter = ({ location, weather }) => {
  return (
    <div className="Home  screen">
      <h1>{location}!</h1>
      <h1>{weather.description}</h1>
      <h1>{weather.temp}°</h1>
      <h1>Weather : {weather.condition}</h1>
      <div className="Home__info">
        <div>
          <h2>wind</h2>
          <h2>{weather.speed}km/h</h2>
        </div>
        <div>
          <h2>humidity</h2>
          <h2>{weather.humidity}%</h2>
        </div>
      </div>
      <h2>
        <Time />
      </h2>
    </div>
  );
};

export default Presenter;
