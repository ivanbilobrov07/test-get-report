import {
  ITransaction,
  TransactionStatus,
  TransactionType,
} from "../interfaces";
import transactionsData from "./transactions.json";

export const transactions: ITransaction[] = transactionsData.map(
  (transaction) => ({
    ...transaction,
    type: TransactionType[transaction.type as keyof typeof TransactionType],
    status:
      TransactionStatus[transaction.status as keyof typeof TransactionStatus],
  })
);
