import styled from "@emotion/styled";
import { theme } from "../theme";

export const StyledDay = styled.div``;

export const StyledForecastItem = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  gap: ${theme.spacing(1)};
  grid-template-areas: "waveHeight timestamp wavePeriod";
  grid-template-columns: 1fr 48px 48px;
  margin-bottom: 1px;
`;

export const WaveHeight = styled.div`
  grid-area: waveHeight;
  position: relative;
  padding: 2px;
  border-radius: 16px;
  background-color: ${theme.palette.grey[900]};
  border: solid 1px ${theme.palette.grey[900]};
`;

export const Background = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 16px;
  opacity: 0.5;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  justify-content: start;
`;

export const Timestamp = styled.div`
  grid-area: timestamp;
`;

export const WavePeriod = styled.div`
  grid-area: wavePeriod;
`;
