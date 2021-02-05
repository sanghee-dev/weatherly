import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "0176bd3b06bc5cd4dbec44d2a0089d6e",
    units: "metric",
  },
});

export const weatherApi = {
  future: ({ lat, lon }) =>
    api.get("onecall?", {
      params: {
        lat: lat,
        lon: lon,
        exclude: "current,minutely,hourly,alerts",
      },
    }),
  home: ({ lat, lon }) =>
    api.get("weather?", {
      params: {
        lat: lat,
        lon: lon,
      },
    }),
  past: ({ lat, lon }) =>
    api.get("onecall/timemachine?", {
      params: {
        lat: lat,
        lon: lon,
        dt: Math.floor(+new Date() / 1000 - 86400 * 1),
      },
    }),
};
