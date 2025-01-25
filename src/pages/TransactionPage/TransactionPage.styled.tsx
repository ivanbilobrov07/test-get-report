import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  padding-top: 100px;
  position: relative;
`;

export const Header = styled.header`
  margin-bottom: 50px;
  text-align: center;
`;

export const Amount = styled.p`
  font-weight: 700;
  font-size: 42px;
`;

export const TransactionDetails = styled.div`
  color: rgb(155, 143, 143);
`;

export const PaymentMethod = styled.p`
  color: rgb(155, 143, 143);
`;

export const TotalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid rgb(155, 143, 143);
`;

export const StyledLink = styled(Link)`
  color: blue;
  position: absolute;
  top: 50px;
`;
