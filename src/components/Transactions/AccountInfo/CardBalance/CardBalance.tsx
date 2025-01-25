import { MAXIMUM_CARD_BALANCE } from "~/shared";
import {
  CardBalanceAmount,
  CardBalanceAvailableAmount,
  CardBalanceBox,
} from "./CardBalance.styled";
import { FC } from "react";

interface CardBalanceProps {
  cardBalance: number;
}

export const CardBalance: FC<CardBalanceProps> = ({ cardBalance }) => {
  const availableBalance = parseFloat(
    (MAXIMUM_CARD_BALANCE - cardBalance).toFixed(2)
  );

  return (
    <CardBalanceBox>
      <h3>Card Balance</h3>
      <CardBalanceAmount>${cardBalance}</CardBalanceAmount>
      <CardBalanceAvailableAmount>
        ${availableBalance} Available
      </CardBalanceAvailableAmount>
    </CardBalanceBox>
  );
};
