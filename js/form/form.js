import { updateCurrentWeatherSection } from "../weather-section/updateCurrentWeatherSection.js";
import { setCurrentWeather } from "./data/currentWeather.js";
import { getCoordinates } from "./helpers/getCoordinates.js";
import { getUrl } from "./helpers/getUrl.js";

const form = document.getElementById("form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const cityId = Number(event.target.city.value);
  const coordinates = getCoordinates(cityId);
  const url = getUrl(coordinates.lat, coordinates.lon);

  axios
    .get(url)
    .then((response) => {
      setCurrentWeather(response.data, cityId);
    })
    .catch(() => {
      setCurrentWeather(null, null);
    })
    .finally(() => {
      updateCurrentWeatherSection();
    });
};

export const addFormSubmitListener = () => {
  form.addEventListener("submit", handleFormSubmit);
};
