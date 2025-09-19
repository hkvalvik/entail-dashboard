import { ReactNode } from "react";
import { ScrollArea, StyledHorizontalSplit } from "./styles";

interface Props {
  top: ReactNode;
  bottom: ReactNode;
}

export const HorizontalSplit = ({ top, bottom }: Props) => (
  <StyledHorizontalSplit>
    <ScrollArea>{top}</ScrollArea>
    <ScrollArea>{bottom}</ScrollArea>
  </StyledHorizontalSplit>
);
