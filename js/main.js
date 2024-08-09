import { addFormSubmitListener } from "./form/form.js";
import { renderCitiesOptions } from "./form/helpers/renderCitiesOptions.js";
import { showInitialWeatherInfo } from "./weather-section/showInitialWeatherInfo.js";
import { updateSavedSearchesSection } from "./saved-searches/updateSavedSearchesSection.js";

renderCitiesOptions();
addFormSubmitListener();
showInitialWeatherInfo();
updateSavedSearchesSection();
