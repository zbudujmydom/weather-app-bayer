export const getUrl = (lat, lon) => {
  const params = ["temperature_2m", "rain", "snowfall", "wind_speed_180m"];

  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=Europe%2FBerlin&current=${params.join()}`;
};
