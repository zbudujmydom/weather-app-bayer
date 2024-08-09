export const getParsedDate = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return date.toLocaleDateString("pl-PL", options);
};
