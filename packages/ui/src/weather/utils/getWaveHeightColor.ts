export const getWaveHeightColor = (
  waveHeight: number,
  maxWaveHeight: number
) => {
  const percentage = waveHeight / maxWaveHeight;
  const red = Math.floor(percentage * 255);
  const green = Math.floor(255 - percentage * 255);
  const blue = 0;
  return `rgb(${red}, ${green}, ${blue})`;
};
