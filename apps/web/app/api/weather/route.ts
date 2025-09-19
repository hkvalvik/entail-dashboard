import { getWeatherMock } from "../__mocks__/weather";

export const GET = async () => {
  try {
    const weather = getWeatherMock();
    return new Response(JSON.stringify(weather), {
      status: 200,
    });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
};
