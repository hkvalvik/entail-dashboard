interface Options {
  hs: number;
  tp: [number, number];
  waveHeight: number;
  wavePeriod: number;
}

export const conditionsAreAcceptable = ({
  hs,
  tp: [tpA, tpB],
  waveHeight,
  wavePeriod,
}: Options) => {
  const heightOK = waveHeight <= hs;

  if (!tpA || !tpB) return false;
  const periodOK = wavePeriod >= tpA && wavePeriod <= tpB;

  return heightOK && periodOK;
};
