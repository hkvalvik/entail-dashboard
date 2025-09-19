export const getScheduleMock = () => {
  return {
    id: "1",
    metadata: {
      title: "Offshore Project Schedule",
      generated: "2024-08-31",
      version: "1.0",
    },
    vessels: [
      {
        name: "Pioneering Spirit",
      },
    ],
    projects: [
      {
        id: "1",
        name: "Riser Replacement",
        description: "Riser Replacement at offshore oil platform",
        location: {
          name: "North Sea",
          coordinates: {
            lat: 61.5,
            lng: 4.8,
          },
          waterDepth: 400,
          region: "North Sea",
        },
        startDate: "2024-08-24",
        endDate: "2024-09-15",
        projectManager: "Emma Thompson",
        marineCoordinator: "Lars Andersen",
        version: "v1.3",
        tasks: [
          {
            id: "wf-strm-001",
            name: "STORM RIDING",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-08-24",
            endDate: "2024-08-26",
            duration: 2,
            weatherLimits: {
              Hs: 6.0,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-prep-001",
            name: "PREP WORK",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-08-27",
            endDate: "2024-08-29",
            duration: 2,
            weatherLimits: {
              Hs: 3.0,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-inst-001",
            name: "INSTALLATION TASK 1",
            level: 1,
            parentId: "wf-001",

            startDate: "2024-08-30",
            endDate: "2024-09-02",
            duration: 4,
            weatherLimits: {
              Hs: 2.0,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-inst-002",
            name: "INSTALLATION TASK 2",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-09-03",
            endDate: "2024-09-07",
            duration: 4,
            weatherLimits: {
              Hs: 2.0,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-strm-001",
            name: "STORM RIDING",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-09-08",
            endDate: "2024-09-09",
            duration: 1,
            weatherLimits: {
              Hs: 6.0,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-inst-003",
            name: "INSTALLATION TASK 3",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-09-10",
            endDate: "2024-09-12",
            duration: 2,
            weatherLimits: {
              Hs: 1.5,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-inst-004",

            name: "INSTALLATION TASK 4",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-09-13",
            endDate: "2024-09-14",
            duration: 1,
            weatherLimits: {
              Hs: 3.5,
              Tp: [5, 15],
            },
          },
          {
            id: "wf-inst-005",
            name: "INSTALLATION TASK 5",
            level: 1,
            parentId: "wf-001",
            startDate: "2024-09-14",
            endDate: "2024-09-15",
            duration: 1,
            weatherLimits: {
              Hs: 2.5,
              Tp: [5, 15],
            },
          },
        ],
      },
    ],
  };
};
