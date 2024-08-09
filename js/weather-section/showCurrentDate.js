import { currentWeatherSection } from "../common/elements.js";

export const showCurrentDate = (timestamp) => {
  const text = document.createElement("p");
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  text.textContent = `Date: ${date.toLocaleDateString("pl-PL", options)}`;

  currentWeatherSection.appendChild(text);
};
