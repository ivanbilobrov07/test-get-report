export enum TransactionStatus {
  Pending = "Pending",
  Approved = "Approved",
}

export enum TransactionType {
  Credit = "Credit",
  Payment = "Payment",
}

export interface ITransaction {
  id: number;
  type: TransactionType;
  amount: number;
  name: string | null;
  description: string;
  date: string;
  status: TransactionStatus;
  authorizedUser: string | null;
  paymentMethod: string;
}
