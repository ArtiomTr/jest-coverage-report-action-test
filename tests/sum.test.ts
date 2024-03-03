import { sum } from '..'

describe("sum", () => {
  it("should sum", () => {
    expect(Math.random() > 0.5).toBe(true);
    expect(sum(1, 2)).toBe(3);
  });
});
