import { currentWeatherSection } from "../common/elements.js";

export const showInitialWeatherInfo = () => {
  currentWeatherSection.replaceChildren();

  const message = document.createElement("p");
  message.textContent = "Please select city and click “Check” button";
  currentWeatherSection.appendChild(message);
};
