import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-right: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const TransactionListElementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MoreInfoIconWrapper = styled.div`
  margin-bottom: auto;
  padding-top: 2px;
`;

export const PaymentIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
  border-radius: 10px;
`;
