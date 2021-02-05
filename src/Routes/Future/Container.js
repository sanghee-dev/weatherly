import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { weatherApi } from "api";

const Container = ({ lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async (lat, lon) => {
        try {
          const json = await weatherApi.future(lat, lon);
          console.log(json);
          const {
            data: { daily },
          } = json;
          console.log(daily);
          setWeather(daily);
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

  return <Presenter weather={weather} />;
};

export default Container;
