import { FC } from "react";
import { formatDate, ITransaction } from "~/shared";
import { TransactionStatus, TransactionType } from "~/shared/interfaces";
import {
  Content,
  MoreInfoIconWrapper,
  PaymentIconWrapper,
  TransactionListElementHeader,
  Wrapper,
} from "./TransactionListElement.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface TransactionListElementProps {
  transaction: ITransaction;
}

export const TransactionListElement: FC<TransactionListElementProps> = ({
  transaction,
}) => {
  const { id, type, amount, name, description, date, status, authorizedUser } =
    transaction;

  const formattedAmount = `${
    type === TransactionType.Credit ? "" : "+"
  }$${amount.toFixed(2)}`;
  const formattedDate = formatDate(date);

  return (
    <Link to={`transactions/${id}`}>
      <Wrapper>
        <PaymentIconWrapper>
          <FontAwesomeIcon
            icon={faCheck}
            size="xl"
            style={{ color: "white" }}
          />
        </PaymentIconWrapper>
        <Content>
          <TransactionListElementHeader>
            <h3>{name ? name : "Payment"}</h3>
            <p>{formattedAmount}</p>
          </TransactionListElementHeader>
          <p>
            {status === TransactionStatus.Pending ? "Pending - " : ""}
            {description}
          </p>
          <p>
            {authorizedUser ? `${authorizedUser} - ` : ""}
            {formattedDate}
          </p>
        </Content>
        <MoreInfoIconWrapper>
          <FontAwesomeIcon icon={faChevronRight} />
        </MoreInfoIconWrapper>
      </Wrapper>
    </Link>
  );
};
