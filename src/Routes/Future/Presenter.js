import React from "react";

const Presenter = ({ weather }) => {
  return (
    <div className="FutureWeather screen">
      <h1>Future weather</h1>
      <h2>
        {weather.map((day) => (
          <h3>{day.weather[0].main}</h3>
        ))}
      </h2>
    </div>
  );
};

export default Presenter;
