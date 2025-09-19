import { getScheduleMock } from "../api/__mocks__/schedule";

export type Schedule = ReturnType<typeof getScheduleMock>;

export type ScheduleProject = Schedule["projects"][number];

export type ScheduleTask = Schedule["projects"][number]["tasks"][number];
