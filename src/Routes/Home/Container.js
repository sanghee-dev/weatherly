import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { weatherApi } from "api";

const Container = ({ position }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async (position) => {
        try {
          const response = await weatherApi.home(position);
          const json = await response.json();
          console.log(json);
          const {
            name,
            main: { temp, humidity },
            weather: [{ main: condition, description }],
            wind: { speed },
          } = await json;
          setLocation(name);
          setWeather({
            temp,
            humidity,
            condition,
            description,
            speed,
          });
        } catch {
          setIsError("Can't find information.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData(position);
    }
    return () => (mounted = false);
  }, [position]);

  return <Presenter location={location} weather={weather} />;
};

export default Container;
