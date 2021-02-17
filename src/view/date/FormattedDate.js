const FormattedDate = ({ date }) =>
  date.toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default FormattedDate;
