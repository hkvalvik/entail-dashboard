import { expect, test } from "@playwright/test";
import { getTestSelector, TestId } from "@repo/e2e-utils/testId";

test("an error message is displayed when the api returns an error", async ({
  page,
}) => {
  await page.goto("/dashboard/INVALID_ID/INVALID_ID");
  await page.waitForLoadState("networkidle");
  const count = await page
    .locator(getTestSelector(TestId.MessageBanner))
    .count();
  expect(count).toBe(1);
});
