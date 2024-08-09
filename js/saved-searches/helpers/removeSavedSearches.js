import { savedSearchesStorageKey } from "../../common/storageKeys.js";

export const removeSavedSearches = () => {
  localStorage.removeItem(savedSearchesStorageKey);
};
