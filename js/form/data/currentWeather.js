import { getCurrentCity } from "../helpers/getCurrentCity.js";

let currentWeather = null;

export const getCurrentWeather = () => {
  return currentWeather;
};

export const setCurrentWeather = (data, cityId) => {
  if (!(data && cityId)) {
    currentWeather = null;
  }

  currentWeather = {
    date: Date.now(),
    city: getCurrentCity(cityId),
    details: [
      {
        param: "Temperature",
        icon: "fa-solid fa-temperature-three-quarters",
        value: data.current.temperature_2m,
        unit: data.current_units.temperature_2m,
      },
      {
        param: "Rain",
        icon: "fa-solid fa-droplet",
        value: data.current.rain,
        unit: data.current_units.rain,
      },
      {
        param: "Snowfall",
        icon: "fa-solid fa-snowflake",
        value: data.current.snowfall,
        unit: data.current_units.snowfall,
      },
      {
        param: "Wind speed",
        icon: "fa-solid fa-wind",
        value: data.current.wind_speed_180m,
        unit: data.current_units.wind_speed_180m,
      },
    ],
  };
};
