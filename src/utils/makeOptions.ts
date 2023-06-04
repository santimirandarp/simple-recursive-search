import { type SearchOptions } from '../types';

/**
 * Make search options by overwriting default options.
 * @param options - search options {@link SearchOptions}
 * @returns search options
 */
export function makeOptions(options: Partial<SearchOptions>): SearchOptions {
  return {
    filterFilename: null,
    filterDirname: null,
    directories: false,
    files: true,
    dotFiles: false,
    ...options,
  };
}
