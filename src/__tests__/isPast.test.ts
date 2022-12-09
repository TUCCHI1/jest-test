import { isPast } from "../utils/isPast";

describe("isPast util", () => {
  beforeEach(() => {
    const spy = jest.spyOn(Date, "now");
    spy.mockReturnValue(new Date("2022-05-01").getTime());
  });

  test("過去の日付の場合はtrue", () => {
    const date = new Date("2022-04-30");
    expect(isPast(date)).toBeTruthy();
  });

  test("未来の日付の場合はfalse", () => {
    const date = new Date("2022-12-30");
    expect(isPast(date)).toBeFalsy();
  });

  // test("Mock test", () => {
  //   const spy = jest.spyOn(Date, "now");
  //   spy.mockReturnValue(new Date("2021-05-20").getTime());

  //   console.log(new Date(Date.now()));
  // });
});
