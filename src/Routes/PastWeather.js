import React, { useState, useEffect } from "react";

const PastWeather = ({ lat = "37", lon = "127", API_KEY }) => {
  const [weather, setWeather] = useState({});
  const time = Math.floor(+new Date() / 1000 - 86400 * 1);
  const API = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=metric`;

  const getWeather = async (API) => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    const {
      current: { temp },
    } = await json;
    await setWeather(temp);
    console.log(temp);
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
    <div>
      <h4>PastWeather</h4>
    </div>
  );
};

export default PastWeather;
