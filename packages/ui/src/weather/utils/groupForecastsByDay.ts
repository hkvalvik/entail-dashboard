import { format, parseISO } from "date-fns";
import { Forecast } from "../types";

export const groupForecastsByDay = (forecasts: Forecast[]) =>
  forecasts.reduce(
    (groups, forecast) => {
      const date = parseISO(forecast.timestamp);
      const dayKey = format(date, "yyyy-MM-dd");
      groups[dayKey] = groups[dayKey] || [];
      groups[dayKey].push(forecast);
      return groups;
    },
    {} as Record<string, Forecast[]>
  );
