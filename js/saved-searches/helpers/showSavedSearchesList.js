import { savedSearchesSection } from "../../common/elements.js";
import { getParsedDate } from "./getParsedDate.js";
import { getSavedSearchesFromStorage } from "./getSavedSearchesFromStorage.js";

const list = document.createElement("ul");
list.classList.add("saved-searches-list");

export const showSavedSearchesList = () => {
  const searches = getSavedSearchesFromStorage();
  list.replaceChildren();

  searches.forEach((search) => {
    const item = document.createElement("li");
    const date = getParsedDate(search.date);

    item.textContent = `${date} ${search.city} ${search.temperature}`;
    list.appendChild(item);
  });

  savedSearchesSection.appendChild(list);
};
