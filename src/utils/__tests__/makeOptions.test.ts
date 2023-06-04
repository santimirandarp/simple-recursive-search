// test the makeOptions function
import { makeOptions } from "../makeOptions";

describe("makeOptions", () => {
  test("should return default options", () => {
    const options = makeOptions({});
    expect(options).toEqual({
      filter: null,
      directories: false,
      files: true,
      dotFiles: false,
    });
  });
  test("should return overwritten options", () => {
    const options = makeOptions({
      directories: true,
      dotFiles: true,
    });
    expect(options).toEqual({
      filter: null,
      directories: true,
      files: true,
      dotFiles: true,
    });
  });
});
