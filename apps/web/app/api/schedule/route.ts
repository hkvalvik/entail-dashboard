import { getScheduleMock } from "../__mocks__/schedule";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const scheduleId = searchParams.get("scheduleId");
  try {
    const schedule = getScheduleMock();

    if (schedule.id !== scheduleId) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify(schedule), {
      status: 200,
    });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
};
