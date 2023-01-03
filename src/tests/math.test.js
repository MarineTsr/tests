import { add, timer } from "../math";

jest.useFakeTimers();

test("Should add numbers", () => {
  expect(add(1, 1)).toBe(2);
});

test("Should call timer", () => {
  const fakeCallback = jest.fn();

  timer(fakeCallback);

  jest.runAllTimers();

  expect(fakeCallback).toBeCalled();
  expect(fakeCallback).toHaveBeenCalledWith("Hello world !");
});
