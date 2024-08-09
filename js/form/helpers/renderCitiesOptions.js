import { citiesSelect } from "../../common/elements.js";
import { cities } from "../data/cities.js";

export const renderCitiesOptions = () => {
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.text = city.name;
    option.value = city.id;
    citiesSelect.appendChild(option);
  });
};
