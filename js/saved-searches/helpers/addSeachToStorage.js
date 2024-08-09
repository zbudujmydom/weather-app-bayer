import { savedSearchesStorageKey } from "../../common/storageKeys.js";
import { getSavedSearchesFromStorage } from "./getSavedSearchesFromStorage.js";

export const addSearchToStorage = (temperature, city, date) => {
  const savedSearches = getSavedSearchesFromStorage();
  savedSearches.push({ date, city, temperature });

  localStorage.setItem(savedSearchesStorageKey, JSON.stringify(savedSearches));
};
