import { expect, test } from "@playwright/test";

test("should navigate to duel page", async ({ page }) => {
  await page.goto("/games/nfl");
  await page.getByRole("link", { name: "View duel" }).first().click();

  await expect(
    page.getByRole("link", { name: "Return to games" })
  ).toBeVisible();
  await expect(page.getByText("Passing", { exact: true })).toHaveCount(2);
  await expect(page.getByText("Rushing", { exact: true })).toHaveCount(2);
  await expect(page.getByText("Receiving", { exact: true })).toHaveCount(2);
});
