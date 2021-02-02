import React, { useState, useEffect } from "react";

const FutureWeather = ({ lat = "37", lon = "127", API_KEY }) => {
  const [weather, setWeather] = useState([]);
  const exclude = "current,minutely,hourly,alerts";
  const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=metric`;

  const getWeather = async (API) => {
    const response = await fetch(API);
    const json = await response.json();
    const { daily } = await json;
    await setWeather(daily);
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
    <div className="FutureWeather screen">
      <h1>Future weather</h1>
      <h2>
        {weather.map((day) => (
          <h4>{day.weather[0].main}</h4>
        ))}
      </h2>
    </div>
  );
};

export default FutureWeather;
