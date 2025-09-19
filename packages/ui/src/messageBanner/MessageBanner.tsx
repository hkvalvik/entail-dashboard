import { HTMLAttributes } from "react";
import { UnstyledLi, UnstyledUl } from "../unstyledList/UnstyledList";
import { StyledMessageBanner, StyledMessageBannerProps } from "./styles";

export interface MessageBannerItem {
  text: string;
  ariaLive: "polite" | "assertive";
}

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    StyledMessageBannerProps {
  items: MessageBannerItem[];
}

export const MessageBanner = ({ items, ...props }: Props) => {
  const ariaLive = items.some((item) => item.ariaLive === "assertive")
    ? "assertive"
    : "polite";

  return items.length > 0 ? (
    <StyledMessageBanner role="alert" aria-live={ariaLive} {...props}>
      {items.length === 1 ? items[0]?.text : <List items={items} />}
    </StyledMessageBanner>
  ) : null;
};

interface ListProps {
  items: MessageBannerItem[];
}

const List = ({ items }: ListProps) => (
  <UnstyledUl>
    {items.map((item, index) => (
      <UnstyledLi key={index}>{item.text}</UnstyledLi>
    ))}
  </UnstyledUl>
);
