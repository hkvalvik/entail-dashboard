import { isWithinInterval } from "date-fns";
import { ScheduleTask } from "../../apiTypes/schedule";
import { Weather } from "../../apiTypes/weather";
import { conditionsAreAcceptable } from "./conditionsAreAcceptable";

export const taskIsExecutable = (task: ScheduleTask, weather: Weather) => {
  const forecast = weather.forecast.find(({ timestamp }) =>
    isWithinInterval(new Date(timestamp), {
      start: new Date(task.startDate),
      end: new Date(task.endDate),
    })
  );
  if (!forecast) return false;
  const [tpA, tpB] = task.weatherLimits.Tp;
  if (!tpA || !tpB) return false;
  return conditionsAreAcceptable({
    hs: task.weatherLimits.Hs,
    tp: [tpA, tpB],
    waveHeight: forecast.wave_height,
    wavePeriod: forecast.wave_period,
  });
};
