import {
  AUTUMN_FIRST_MONTH,
  AUTUMN_LAST_MONTH,
  MILLISECONDS_PER_DAY,
  SPRING_FIRST_MONTH,
  SPRING_LAST_MONTH,
  SUMMER_FIRST_MONTH,
  SUMMER_LAST_MONTH,
  WINTER_FIRST_MONTH,
} from "~/shared";
import { DailyPointsAmount, DailyPointsBox } from "./DailyPoints.styled";

const getDailyPoints = () => {
  const currentDate = new Date();
  const dayOfSeason = getDayOfSeason(currentDate);

  let twoDaysAgo = 0;
  let oneDayAgo = 0;
  let dailyPoints = 0;

  for (let i = 1; i <= dayOfSeason; i++) {
    if (i === 1) {
      dailyPoints = 2;
    } else if (i === 2) {
      dailyPoints = 3;
    } else {
      dailyPoints = twoDaysAgo + 0.6 * oneDayAgo;
    }

    twoDaysAgo = oneDayAgo;
    oneDayAgo = dailyPoints;
  }

  return dailyPoints;
};

const getStartOfSeason = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (month >= SPRING_FIRST_MONTH && month <= SPRING_LAST_MONTH) {
    return new Date(year, SPRING_FIRST_MONTH - 1, 1);
  } else if (month >= SUMMER_FIRST_MONTH && month <= SUMMER_LAST_MONTH) {
    return new Date(year, SUMMER_FIRST_MONTH - 1, 1);
  } else if (month >= AUTUMN_FIRST_MONTH && month <= AUTUMN_LAST_MONTH) {
    return new Date(year, AUTUMN_FIRST_MONTH - 1, 1);
  } else if (month === WINTER_FIRST_MONTH) {
    return new Date(year, WINTER_FIRST_MONTH - 1, 1);
  } else {
    return new Date(year - 1, WINTER_FIRST_MONTH - 1, 1);
  }
};

const getDayOfSeason = (date: Date) => {
  const startOfSeason = getStartOfSeason(date);

  return Math.floor(
    (date.getTime() - startOfSeason.getTime()) / MILLISECONDS_PER_DAY + 1
  );
};

export const DailyPoints = () => {
  const dailyPoints = getDailyPoints();

  return (
    <DailyPointsBox>
      <h3>Daily Points</h3>
      <DailyPointsAmount>
        {dailyPoints > 1000
          ? Math.round(dailyPoints / 1000) + "K"
          : Math.round(dailyPoints)}
      </DailyPointsAmount>
    </DailyPointsBox>
  );
};
