// test the makeOptions function
import { makeOptions } from '../makeOptions';

describe('makeOptions', () => {
  test('should return default options', () => {
    const options = makeOptions({});
    expect(options).toEqual({
      excludeFilename: null,
      excludeDir: null,
      wantDirectories: false,
      wantFiles: true,
      dotFiles: false,
    });
  });
  test('should return overwritten options', () => {
    const options = makeOptions({
      wantDirectories: true,
      dotFiles: true,
      excludeDir: (name) => name === 'node_modules',
    });
    expect(options).toEqual({
      excludeFilename: null,
      excludeDir: expect.any(Function),
      wantDirectories: true,
      wantFiles: true,
      dotFiles: true,
    });
  });
});
