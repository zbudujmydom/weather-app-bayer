import { currentWeatherSection } from "../common/elements.js";

export const showError = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "error";
  currentWeatherSection.appendChild(h2);
};
