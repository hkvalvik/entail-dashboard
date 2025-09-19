import { ReactNode } from "react";
import { UnstyledLi, UnstyledOl } from "../unstyledList/UnstyledList";
import { StyledTimeline } from "./styles";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const Timeline = <T,>({ items, renderItem }: Props<T>) => {
  return (
    <StyledTimeline>
      <UnstyledOl>
        {items.map((item, index) => {
          return <UnstyledLi key={index}>{renderItem(item)}</UnstyledLi>;
        })}
      </UnstyledOl>
    </StyledTimeline>
  );
};
