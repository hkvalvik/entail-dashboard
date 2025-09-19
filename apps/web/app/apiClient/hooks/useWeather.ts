import { Weather } from "../../apiTypes/weather";
import { configs } from "../configs";
import { useApi } from "../utils/useApi";
import { apiFetch } from "./../utils/apiFetch";

const { endpoint, ...config } = configs.weather;

export const useWeather = () => {
  return useApi<Weather>({
    queryKey: [config.queryRootKey],
    queryFn: () => apiFetch(endpoint()),
    ...config,
  });
};
