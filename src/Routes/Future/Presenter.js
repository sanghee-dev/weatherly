import React from "react";

const Presenter = ({ weather }) => {
  console.log(weather);
  return (
    <div className="FutureWeather screen">
      <h1>Future weather</h1>
      {weather.map((w) => (
        <h1>{w.temp.day}°</h1>
      ))}
    </div>
  );
};

export default Presenter;
