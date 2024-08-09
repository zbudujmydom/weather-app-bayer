import { cities } from "../data/cities.js";

export const getCoordinates = (id) => {
  const selectedCity = cities.find((city) => city.id === id);

  if (selectedCity) {
    return selectedCity.coordinates;
  }

  return null;
};
