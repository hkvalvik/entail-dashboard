import { ScheduleTask } from "../../apiTypes/schedule";
import { Weather } from "../../apiTypes/weather";
import { taskIsExecutable } from "../../lib/utils/taskIsExecutable";
import { useSchedule } from "./useSchedule";
import { useWeather } from "./useWeather";

interface Options {
  scheduleId: string;
  projectId: string;
  taskId?: string;
}

export const useDashboard = ({ scheduleId, projectId, taskId }: Options) => {
  const weatherResult = useWeather();

  const scheduleResult = useSchedule({ scheduleId });

  const weather = weatherResult.data;

  const schedule = scheduleResult.data;

  const project = schedule?.projects?.find(({ id }) => id === projectId);

  const currentTask = project?.tasks?.find((task) => task.id === taskId);

  const executableTasks = getExecutableTasks(project?.tasks, weather);

  if (weather && schedule && project) {
    return {
      weather,
      schedule,
      project,
      currentTask,
      executableTasks,
    };
  }
};

const getExecutableTasks = (
  tasks: ScheduleTask[] | undefined = [],
  weather: Weather | undefined
) => {
  if (!tasks) return [];
  if (!weather) return [];
  return tasks
    .filter((task) => taskIsExecutable(task, weather))
    .map((task) => task.id);
};
