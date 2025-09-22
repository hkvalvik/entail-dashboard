import { isWithinInterval } from "date-fns";
import { ScheduleTask } from "../../apiTypes/schedule";
import { Weather } from "../../apiTypes/weather";
import { conditionsAreAcceptable } from "./conditionsAreAcceptable";

export const taskIsExecutable = (task: ScheduleTask, weather: Weather) => {
  const forecast = getForecastForTask(task, weather);
  if (!forecast) return false;

  const [minPeakPeriod, maxPeakPeriod] = task.weatherLimits.Tp;
  if (!minPeakPeriod || !maxPeakPeriod) return false;

  return conditionsAreAcceptable({
    significantWaveHeight: task.weatherLimits.Hs,
    minPeakPeriod,
    maxPeakPeriod,
    waveHeight: forecast.wave_height,
    wavePeriod: forecast.wave_period,
  });
};

const getForecastForTask = (task: ScheduleTask, weather: Weather) =>
  weather.forecast.find(({ timestamp }) =>
    timestampIsWithinTask(timestamp, task)
  );

const timestampIsWithinTask = (timestamp: string, task: ScheduleTask) =>
  isWithinInterval(timestamp, {
    start: new Date(task.startDate),
    end: new Date(task.endDate),
  });
