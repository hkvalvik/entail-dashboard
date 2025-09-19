import styled from "@emotion/styled";
import { theme } from "../theme";

export const StyledDashboadLayout = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  min-height: 100vh;
  padding-block: ${theme.spacing(2)};
  background-color: ${theme.palette.grey[50]};

  @media screen and (min-width: ${theme.breakpoints.up("sm")}) {
    padding: ${theme.spacing(2)};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${theme.breakpoints.values.lg}px;
`;
