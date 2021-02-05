import React from "react";

const Presenter = ({ weather }) => {
  return (
    <div className="PastWeather screen">
      <h1>Past weather</h1>
      <h1>{weather.temp}°</h1>
    </div>
  );
};

export default Presenter;
