import { savedSearchesSection } from "../common/elements.js";
import { getSavedSearchesFromStorage } from "./helpers/getSavedSearchesFromStorage.js";
import { showEmptySavedSearchesInfo } from "./helpers/showEmptySavedSearchesInfo.js";
import { showRemoveSavedSearchesButton } from "./helpers/showRemoveSavedSearchesButton.js";
import { showSavedSearchesList } from "./helpers/showSavedSearchesList.js";

export const updateSavedSearchesSection = () => {
  savedSearchesSection.replaceChildren();
  const searches = getSavedSearchesFromStorage();

  if (searches?.length === 0) {
    showEmptySavedSearchesInfo();
    return;
  }

  showSavedSearchesList();
  showRemoveSavedSearchesButton();
};
