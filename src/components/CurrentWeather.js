import React, { useState, useEffect } from "react";

const CurrentWeather = ({ lat = "37", lon = "127", API_KEY }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [description, SetDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const getWeather = async (API) => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    const {
      name,
      main: { temp: temperature, humidity },
      weather: [{ main: condition, description }],
      wind: { speed },
    } = await json;
    await setLocation(name);
    await setWeather(condition);
    await SetDescription(description);
    await setTemp(temperature);
    await setWind(speed);
    await setHumidity(humidity);
  };
  useEffect(() => {
    getWeather(API);
  }, []);

  return (
    <div>
      <h4>{location}</h4>
      <h4>{description}</h4>
      <h4>{temp}°</h4>
      <h4>weather : {weather}</h4>
      <h4>wind : {wind}km/h</h4>
      <h4>humidity : {humidity}%</h4>
    </div>
  );
};

export default CurrentWeather;
