import { currentWeatherSection } from "../common/elements.js";
import { addSearchToStorage } from "../saved-searches/helpers/addSeachToStorage.js";
import { updateSavedSearchesSection } from "../saved-searches/updateSavedSearchesSection.js";

export const addSaveSearchButton = (data) => {
  const button = document.createElement("button");
  button.textContent = "Save search";
  button.type = "button";

  button.addEventListener("click", () => {
    const temperature = data.details.find(
      (item) => item.param === "Temperature"
    );
    const parsedTemperature = `${temperature.value} ${temperature.unit}`;

    addSearchToStorage(parsedTemperature, data.city.name, data.date);
    updateSavedSearchesSection();
  });

  currentWeatherSection.appendChild(button);
};
