import { currentWeatherSection } from "../common/elements.js";
import { getCurrentWeather } from "../form/data/currentWeather.js";
import { addSaveSearchButton } from "./addSaveSearchButton.js";
import { showCurrentDate } from "./showCurrentDate.js";

export const showCurrentWeather = () => {
  const currentData = getCurrentWeather();

  showCurrentDate(currentData.date);

  currentData.details.forEach((detail) => {
    const item = document.createElement("div");

    const icon = document.createElement("i");
    icon.classList.add(...detail.icon.split(" "));
    item.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = `${detail.param}: ${detail.value} ${detail.unit}`;
    item.appendChild(text);

    currentWeatherSection.appendChild(item);
  });

  addSaveSearchButton(currentData);
};
