import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { weatherApi } from "api";

const Container = ({ lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async (lat, lon) => {
        try {
          const json = await weatherApi.home(lat, lon);
          const {
            data: {
              name,
              main: { temp, humidity },
              weather: [{ main: condition, description }],
              wind: { speed },
            },
          } = json;
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
      fetchData(lat, lon);
    }
    return () => (mounted = false);
  }, [lat, lon]);

  return <Presenter location={location} weather={weather} />;
};

export default Container;
