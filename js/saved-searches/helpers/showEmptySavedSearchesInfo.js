import { savedSearchesSection } from "../../common/elements.js";

export const showEmptySavedSearchesInfo = () => {
  const message = document.createElement("p");
  message.textContent = "You have no saved searches.";
  savedSearchesSection.appendChild(message);
};
