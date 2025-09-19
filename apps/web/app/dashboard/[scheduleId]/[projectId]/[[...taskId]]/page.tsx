"use client";

import { DashboardLayout } from "@repo/ui/layouts/DashboardLayout";
import {
  MessageBanner,
  MessageBannerItem,
} from "@repo/ui/messageBanner/MessageBanner";
import { SiteHeader } from "@repo/ui/siteHeader/SiteHeader";
import { Timeline } from "@repo/ui/timeline/Timeline";
import { TimelineItem } from "@repo/ui/timelineItem/TimelineItem";
import { Weather } from "@repo/ui/weather/Weather";
import { Visualization } from "@repo/visualization/Visualization";
import Link from "next/link";
import "normalize.css";
import { use, useContext } from "react";
import { ApiContext } from "../../../../apiClient/ApiContext";
import { useDashboard } from "../../../../apiClient/hooks/useDashboard";
import {
  Schedule,
  ScheduleProject,
  ScheduleTask,
} from "../../../../apiTypes/schedule";
import { Weather as WeatherType } from "../../../../apiTypes/weather";
import { TestId, getTestAttribute } from "@repo/e2e-utils/testId";

interface Params {
  scheduleId: string;
  projectId: string;
  taskId?: string[];
}

interface Props {
  params: Promise<Params>;
}

export default function DashboardPage({ params }: Props) {
  const sanitizedParams = useSanitizedParams(params);
  const dashboardData = useDashboard(sanitizedParams);
  const errorMessages = useErrorMessages();
  return (
    <>
      <MessageBanner
        {...getTestAttribute(TestId.MessageBanner)}
        items={errorMessages}
        variant="error"
      />
      <SiteHeader />
      <main>{dashboardData ? <Dashboard {...dashboardData} /> : null}</main>
    </>
  );
}

const useErrorMessages = (): MessageBannerItem[] => {
  const { errors } = useContext(ApiContext);
  return errors.map(({ message }) => ({
    text: message,
    ariaLive: "polite",
  }));
};

const useSanitizedParams = (params: Promise<Params>) => {
  const { scheduleId, projectId, taskId: taskIds } = use(params);
  const taskId = Array.isArray(taskIds) ? taskIds[0] : undefined;
  return { scheduleId, projectId, taskId };
};

interface DashboardProps {
  schedule: Schedule;
  project: ScheduleProject;
  currentTask?: ScheduleTask;
  executableTasks: string[];
  weather: WeatherType;
}

const Dashboard = ({
  schedule,
  project,
  currentTask,
  executableTasks,
  weather,
}: DashboardProps) => {
  const forecast = weather.forecast.find(
    (forecast) => forecast.timestamp === currentTask?.startDate
  );
  return (
    <DashboardLayout
      timeline={
        <Timeline
          items={project.tasks}
          renderItem={(task) => (
            <TimelineItem
              isActive={task.id === currentTask?.id}
              title={task.name}
              status={executableTasks.includes(task.id) ? "go" : "no-go"}
              details={[
                ["Level", task.level.toString()],
                ["Duration", task.duration.toString()],
                ["Weather limits Hs", task.weatherLimits.Hs.toString()],
                ["Weather limits Tp", task.weatherLimits.Tp.toString()],
              ]}
              startDate={new Date(task.startDate)}
              endDate={new Date(task.endDate)}
              href={`/dashboard/${schedule.id}/${project.id}/${task.id}`}
              buttonComponent={Link}
            />
          )}
        />
      }
      visualization={<Visualization currentTaskId={currentTask?.id} />}
      weather={
        <Weather location={weather.location} forecasts={weather.forecast} />
      }
    />
  );
};
