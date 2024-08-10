import { savedSearchesSection } from "../../common/elements.js";
import { removeSavedSearches } from "../../saved-searches/helpers/removeSavedSearches.js";
import { updateSavedSearchesSection } from "../updateSavedSearchesSection.js";

export const showRemoveSavedSearchesButton = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Remove saved searches";
  button.classList.add("btn", "btn-danger");

  button.addEventListener("click", () => {
    removeSavedSearches();
    updateSavedSearchesSection();
  });

  savedSearchesSection.appendChild(button);
};
