import { Navigate, useParams } from "react-router-dom";
import { Box, formatDate, transactions } from "~/shared";
import {
  Amount,
  Header,
  PaymentMethod,
  Section,
  StyledLink,
  TotalAmountWrapper,
  TransactionDetails,
} from "./TransactionPage.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TransactionPage = () => {
  const { transaction_id } = useParams<{ transaction_id: string }>();

  if (!transaction_id) {
    return <Navigate to={"/"} />;
  }

  const transaction = transactions.find(({ id }) => id === +transaction_id);

  if (!transaction) {
    return <Navigate to={"/"} />;
  }

  const { amount, date, name, status, paymentMethod } = transaction;
  const formattedAmount = `$${amount.toFixed(2)}`;
  const formattedDate = `${formatDate(date)}, ${String(
    new Date(date).getHours()
  ).padStart(2, "0")}:${String(new Date(date).getMinutes()).padStart(2, "0")}`;

  return (
    <Section>
      <StyledLink to={"/"}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </StyledLink>
      <Header>
        <Amount>{formattedAmount}</Amount>
        <TransactionDetails>
          <p>{name}</p>
          <p>{formattedDate}</p>
        </TransactionDetails>
      </Header>
      <Box>
        <p>Status: {status}</p>
        <PaymentMethod>{paymentMethod}</PaymentMethod>
        <TotalAmountWrapper>
          <p>Total</p>
          <p>{formattedAmount}</p>
        </TotalAmountWrapper>
      </Box>
    </Section>
  );
};

export default TransactionPage;
