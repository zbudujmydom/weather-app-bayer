import { currentWeatherSection } from "../common/elements.js";
import { getCurrentWeather } from "../form/data/currentWeather.js";
import { showCurrentWeather } from "./showCurrentWeather.js";
import { showError } from "./showError.js";

export const updateCurrentWeatherSection = () => {
  const currentData = getCurrentWeather();
  currentWeatherSection.replaceChildren();

  if (!currentData) {
    showError();
    return;
  }

  showCurrentWeather();
};
