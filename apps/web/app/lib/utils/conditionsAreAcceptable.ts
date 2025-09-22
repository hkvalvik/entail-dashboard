interface Options {
  significantWaveHeight: number;
  minPeakPeriod: number;
  maxPeakPeriod: number;
  waveHeight: number;
  wavePeriod: number;
}

export const conditionsAreAcceptable = ({
  significantWaveHeight,
  minPeakPeriod,
  maxPeakPeriod,
  waveHeight,
  wavePeriod,
}: Options) => {
  const heightIsAcceptable = waveHeight <= significantWaveHeight;

  const periodIsAcceptable =
    wavePeriod >= minPeakPeriod && wavePeriod <= maxPeakPeriod;

  return heightIsAcceptable && periodIsAcceptable;
};
