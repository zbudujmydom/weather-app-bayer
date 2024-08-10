import { savedSearchesSection } from "../../common/elements.js";
import { getParsedDate } from "./getParsedDate.js";
import { getSavedSearchesFromStorage } from "./getSavedSearchesFromStorage.js";

const list = document.createElement("ul");
list.classList.add("saved-searches-list");

export const showSavedSearchesList = () => {
  const searches = getSavedSearchesFromStorage();
  list.replaceChildren();

  searches.forEach((search) => {
    const item = document.createElement("div");
    item.classList.add("saved-searches-item");

    const dateText = document.createElement("div");
    dateText.textContent = getParsedDate(search.date);

    const cityText = document.createElement("div");
    cityText.textContent = search.city;
    cityText.classList.add("saved-searches-item-city");

    const tempText = document.createElement("div");
    tempText.textContent = search.temperature;

    item.appendChild(dateText);
    item.appendChild(cityText);
    item.appendChild(tempText);

    list.appendChild(item);
  });

  savedSearchesSection.appendChild(list);
};
