import styled from "@emotion/styled";
import { theme } from "../theme";

export const StyledTimelineItem = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas: "shortDate line description";
  grid-template-columns: auto ${theme.spacing(3)} minmax(0, 1fr);
`;

export const ShortDate = styled.div`
  grid-area: shortDate;
  padding-top: ${theme.spacing(1)};
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.palette.text.secondary};
  text-transform: capitalize;
`;

export const Line = styled.div`
  grid-area: line;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: ${theme.spacing(2)};
    left: 50%;
    transform: translateX(-50%);
    width: ${theme.spacing(1)};
    height: ${theme.spacing(1)};
    border-radius: 50%;
    background-color: ${theme.palette.secondary.main};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${theme.palette.secondary.main};
  }
`;

export const Description = styled.div`
  grid-area: description;
  padding-bottom: ${theme.spacing(2)};
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.palette.text.secondary};
`;

export const FullDate = styled.div`
  padding-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.palette.text.secondary};
`;
