import { savedSearchesStorageKey } from "../../common/storageKeys.js";

export const getSavedSearchesFromStorage = () => {
  try {
    const savedData = localStorage.getItem(savedSearchesStorageKey);
    const parsedSavedData = JSON.parse(savedData);

    return Array.isArray(parsedSavedData) ? parsedSavedData : [];
  } catch {
    return [];
  }
};
