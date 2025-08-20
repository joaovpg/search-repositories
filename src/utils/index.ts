const dateFormatter = new Intl.DateTimeFormat("pt-Br", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const formatDate = (date: string | Date) => {
  return dateFormatter.format(new Date(date));
};
