import { FC, ReactNode } from "react";
import { ContainerWrapper } from "./Container.styled";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
