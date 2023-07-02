export const formatDate = (date: any) =>
  new Date(date).toLocaleString("en-GB", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  });
