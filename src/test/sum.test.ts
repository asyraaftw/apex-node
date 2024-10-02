// tests/sum.test.ts

import { sum } from "../mods/sum";

test("SUM OF : 1 + 2 IS 3", () => {
  expect(sum(1, 2)).toBe(3);
});
