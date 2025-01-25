import { MAXIMUM_CARD_BALANCE } from "../constants";

interface GenerateRandomBalanceArgs {
  maxValue: number;
}

export const generateRandomBalance = ({
  maxValue,
}: GenerateRandomBalanceArgs) => {
  if (maxValue <= 0) {
    maxValue = MAXIMUM_CARD_BALANCE;
  }

  const randomBalance = Math.random() * maxValue;

  return parseFloat(randomBalance.toFixed(2));
};
