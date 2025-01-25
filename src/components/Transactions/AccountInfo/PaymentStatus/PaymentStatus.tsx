import { Check } from "./Check";
import { PaymentStatusdBox, PaymentStatusText } from "./PaymentStatus.styled";

export const PaymentStatus = () => {
  return (
    <PaymentStatusdBox>
      <div>
        <h3>No Payment Due</h3>
        <PaymentStatusText>You've paid your balance</PaymentStatusText>
      </div>
      <Check />
    </PaymentStatusdBox>
  );
};
