interface Options {
  significantWaveHeigh: number;
  minPeakPeriod: number;
  maxPeakPeriod: number;
  waveHeight: number;
  wavePeriod: number;
}

export const conditionsAreAcceptable = ({
  significantWaveHeigh,
  minPeakPeriod,
  maxPeakPeriod,
  waveHeight,
  wavePeriod,
}: Options) => {
  const heightIsAcceptable = waveHeight <= significantWaveHeigh;

  const periodIsAcceptable =
    wavePeriod >= minPeakPeriod && wavePeriod <= maxPeakPeriod;

  return heightIsAcceptable && periodIsAcceptable;
};
