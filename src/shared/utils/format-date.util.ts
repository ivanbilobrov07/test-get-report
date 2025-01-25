import { MILLISECONDS_PER_DAY } from "../constants";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();

  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();

  const formattedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const formattedStart = new Date(dateYear, dateMonth, dateDay);

  const differenceInTime = formattedToday.getTime() - formattedStart.getTime();
  const differenceInDays = Math.floor(differenceInTime / MILLISECONDS_PER_DAY);

  if (differenceInDays === 0) {
    return "Today";
  } else if (differenceInDays === 1) {
    return "Yesterday";
  } else if (differenceInDays <= 7 && differenceInDays > 1) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  } else {
    const day = dateDay;
    const month = dateMonth + 1;
    const year = dateYear.toString().slice(-2);

    return `${day}/${month}/${year}`;
  }
};
