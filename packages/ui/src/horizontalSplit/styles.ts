import styled from "@emotion/styled";

export const StyledHorizontalSplit = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr) auto;
`;

export const ScrollArea = styled.div`
  overflow-y: auto;
`;
