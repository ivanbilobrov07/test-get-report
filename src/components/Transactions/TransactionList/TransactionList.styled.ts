import styled from "styled-components";

export const List = styled.ul`
  li + li {
    border-top: 1px solid;
    border-color: gray;
  }
`;
