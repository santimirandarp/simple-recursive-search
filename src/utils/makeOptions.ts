import { type SearchOptions } from '../types';

export function makeOptions(options: Partial<SearchOptions>): SearchOptions {
  return {
    filter: null,
    directories: false,
    files: true,
    dotFiles: false,
    ...options,
  };
}
