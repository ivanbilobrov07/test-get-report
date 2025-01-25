import {
  CardBalance,
  DailyPoints,
  PaymentStatus,
  TransactionList,
} from "~/components";
import { AccountInfoSection, ListBox } from "./TransactionListPage.styled";
import { FC } from "react";

interface TransactionListPageProps {
  cardBalance: number;
}

const TransactionListPage: FC<TransactionListPageProps> = ({ cardBalance }) => {
  return (
    <>
      <AccountInfoSection>
        <div>
          <CardBalance cardBalance={cardBalance} />
          <DailyPoints />
        </div>
        <PaymentStatus />
      </AccountInfoSection>
      <section>
        <h2>Latest Transactions</h2>
        <ListBox>
          <TransactionList />
        </ListBox>
      </section>
    </>
  );
};

export default TransactionListPage;
