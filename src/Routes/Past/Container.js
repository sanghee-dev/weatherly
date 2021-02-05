import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { weatherApi } from "api";

const Container = ({ lat, lon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      const fetchData = async (lat, lon) => {
        try {
          const response = await weatherApi.past(lat, lon, 1); // 1 day before
          const {
            data: {
              current: { temp },
            },
          } = response;
          setWeather({ temp });
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
