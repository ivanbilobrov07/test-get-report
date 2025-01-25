import styled from "styled-components";
import { Box } from "~/shared";

export const ListBox = styled(Box)`
  padding-right: 0;
`;

export const AccountInfoSection = styled.section`
  padding-top: 50px;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;

  & > * {
    flex-grow: 1;
  }
`;
