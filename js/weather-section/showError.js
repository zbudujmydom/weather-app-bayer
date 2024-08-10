import { currentWeatherSection } from "../common/elements.js";

export const showError = () => {
  const messageError = document.createElement("div");

  const p1 = document.createElement("p");
  p1.textContent = "An unexpected error has occured.";
  const p2 = document.createElement("p");
  p2.textContent = "Please try again later.";

  messageError.classList.add("alert", "alert-danger");
  messageError.classList.add("text-center");

  messageError.appendChild(p1);
  messageError.appendChild(p2);
  currentWeatherSection.appendChild(messageError);
};
