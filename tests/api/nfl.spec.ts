import { expect, test } from "@playwright/test";

test("should return a list of games", async ({ request }) => {
  const res = await request.get(`/api/nfl/games`);

  expect(res.ok());
  expect(await res.json()).toHaveLength(2);
});
