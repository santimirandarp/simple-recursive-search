import { type SearchOptions } from '../search';

/**
 * Make search options by overwriting default options.
 * @param options - search options {@link SearchOptions}
 * @returns search options
 */
export function makeOptions(options: Partial<SearchOptions>): SearchOptions {
  return {
    excludeFilename: null,
    excludeDir: null,
    wantDirectories: false,
    wantFiles: true,
    dotFiles: false,
    ...options,
  };
}
