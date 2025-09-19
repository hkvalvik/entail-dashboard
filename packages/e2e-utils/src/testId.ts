export enum TestId {
  MessageBanner = "message-banner",
}

export const getTestAttribute = (testId: TestId) => ({
  "data-test-id": testId,
});

export const getTestSelector = (testId: TestId) => `[data-test-id="${testId}"]`;
