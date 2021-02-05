import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { weatherApi } from "api";

const Container = ({ position }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async (position) => {
        try {
          const response = await weatherApi.past(position);
          const json = await response.json();
          const {
            current: { temp },
          } = await json;
          setWeather({ temp });
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

  return <Presenter weather={weather} />;
};

export default Container;
