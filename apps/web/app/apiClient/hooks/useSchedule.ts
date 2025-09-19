import { Schedule, ScheduleTask } from "../../apiTypes/schedule";
import { configs } from "../configs";
import { useApi } from "../utils/useApi";
import { apiFetch } from "./../utils/apiFetch";

const { endpoint, ...config } = configs.schedule;

interface Params {
  scheduleId: string;
}

export const useSchedule = (params: Params) => {
  return useApi<Schedule>({
    queryKey: [config.queryRootKey, params.scheduleId],
    queryFn: () => apiFetch(endpoint(params.scheduleId)),
    select: sanitizeSchedule,
    ...config,
  });
};

// Remove duplicate tasks with id wf-strm-001 for the demo

const sanitizeSchedule = (schedule: Schedule) => ({
  ...schedule,
  projects: schedule.projects.map((project) => ({
    ...project,
    tasks: removeDuplicates(project.tasks),
  })),
});

const removeDuplicates = (tasks: ScheduleTask[]) =>
  tasks.filter(
    (task, index, self) => index === self.findIndex((t) => t.id === task.id)
  );
