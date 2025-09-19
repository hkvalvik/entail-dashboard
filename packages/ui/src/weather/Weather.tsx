import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import {
  Background,
  Content,
  StyledDay,
  StyledForecastItem,
  Timestamp,
  WaveHeight,
  WavePeriod,
} from "./styles";
import { Forecast } from "./types";
import { getWaveHeightColor } from "./utils/getWaveHeightColor";
import { groupForecastsByDay } from "./utils/groupForecastsByDay";
import { theme } from "../theme";

interface Location {
  lat: number;
  lon: number;
}

interface Props {
  location: Location;
  forecasts: Forecast[];
}

export const Weather = ({ location, forecasts }: Props) => {
  const maxWaveHeight = Math.max(
    ...forecasts.map((forecast) => forecast.wave_height)
  );

  const groupedForecasts = groupForecastsByDay(forecasts);

  const sortedDays = Object.keys(groupedForecasts).sort();

  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.grey[50],
        }}
      >
        <Typography variant="h6" gutterBottom>
          Wave Forecast
        </Typography>
        <Box mb={2}>
          <Typography variant="caption">
            Location: {location.lat}°N, {location.lon}°E
          </Typography>
        </Box>
        <Box>
          {sortedDays.map((dayKey, index) => {
            const dayForecasts = groupedForecasts[dayKey];
            if (!dayForecasts?.[0]) return null;
            const dayDate = parseISO(dayForecasts[0].timestamp);
            return (
              <Day
                key={index}
                dayKey={dayKey}
                dayDate={dayDate}
                dayForecasts={dayForecasts}
                maxWaveHeight={maxWaveHeight}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

interface DayProps {
  dayKey: string;
  dayDate: Date;
  dayForecasts: Forecast[];
  maxWaveHeight: number;
}

const Day = ({ dayKey, dayDate, dayForecasts, maxWaveHeight }: DayProps) => {
  return (
    <StyledDay>
      <Box key={dayKey} mb={3}>
        <Typography variant="body1" gutterBottom>
          {format(dayDate, "EE, MMM do yyyy")}
        </Typography>
        {dayForecasts.map((forecast, index) => (
          <ForecastItem
            key={index}
            forecast={forecast}
            maxWaveHeight={maxWaveHeight}
          />
        ))}
      </Box>
    </StyledDay>
  );
};

interface ForecastItemProps {
  forecast: Forecast;
  maxWaveHeight: number;
}

const ForecastItem = ({ forecast, maxWaveHeight }: ForecastItemProps) => (
  <StyledForecastItem>
    <WaveHeight>
      <Background
        style={{
          backgroundColor: getWaveHeightColor(
            forecast.wave_height,
            maxWaveHeight
          ),
          width: `${(forecast.wave_height / maxWaveHeight) * 100}%`,
        }}
      />
      <Content>
        <Chip
          label={`${forecast.wave_height}m`}
          size="small"
          sx={{
            backgroundColor: getWaveHeightColor(
              forecast.wave_height,
              maxWaveHeight
            ),
            color: "white",
            fontWeight: "bold",
          }}
        />
      </Content>
    </WaveHeight>
    <Timestamp>
      <Typography variant="body2" sx={{ minWidth: 48 }}>
        {format(parseISO(forecast.timestamp), "HH:mm")}
      </Typography>
    </Timestamp>
    <WavePeriod>
      <Typography variant="body2">{forecast.wave_period}s</Typography>
    </WavePeriod>
  </StyledForecastItem>
);
