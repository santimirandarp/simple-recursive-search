// test the makeOptions function
import { makeOptions } from '../makeOptions';

describe('makeOptions', () => {
  test('should return default options', () => {
    const options = makeOptions({});
    expect(options).toEqual({
      filterFilename: null,
      filterDirname: null,
      directories: false,
      files: true,
      dotFiles: false,
    });
  });
  test('should return overwritten options', () => {
    const options = makeOptions({
      directories: true,
      dotFiles: true,
      filterDirname: (name) => name !== 'node_modules',
    });
    expect(options).toEqual({
      filterFilename: null,
      filterDirname: expect.any(Function),
      directories: true,
      files: true,
      dotFiles: true,
    });
  });
});
