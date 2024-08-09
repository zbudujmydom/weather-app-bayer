import { cities } from "../data/cities.js";

export const getCurrentCity = (id) => {
  return cities.find((city) => city.id === id);
};
