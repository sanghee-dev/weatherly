import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import Time from "Components/Time";

const Presenter = ({ location, weather }) => {
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

export default Presenter;
