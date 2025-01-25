import { transactions } from "~/shared";
import { TransactionListElement } from "./TransactionListElement";
import { List } from "./TransactionList.styled";

export const TransactionList = () => {
  const lastTransactions = transactions.slice(0, 10);

  return (
    <List>
      {lastTransactions.map((transaction) => (
        <li key={transaction.id}>
          <TransactionListElement transaction={transaction} />
        </li>
      ))}
    </List>
  );
};
