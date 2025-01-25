import { FC, ReactNode } from "react";
import { BoxWrapper } from "./Box.styled";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

export const Box: FC<BoxProps> = ({ children, className }) => {
  return <BoxWrapper className={className}>{children}</BoxWrapper>;
};
