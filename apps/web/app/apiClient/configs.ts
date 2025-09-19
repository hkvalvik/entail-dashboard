const oneSecond = 1000;

const oneMinute = 60 * oneSecond;

const oneHour = 60 * oneMinute;

export const configs = {
  weather: {
    queryRootKey: "weather",
    endpoint: () => `/api/weather`,
    errorMessage: "Failed to fetch weather",
    refetchInterval: oneMinute,
    staleTime: 10 * oneMinute,
    gcTime: oneHour,
  },
  schedule: {
    queryRootKey: "schedule",
    endpoint: (scheduleId: string) => `/api/schedule?scheduleId=${scheduleId}`,
    errorMessage: "Failed to fetch schedule",
    staleTime: 10 * oneMinute,
    gcTime: oneHour,
  },
} as const;
