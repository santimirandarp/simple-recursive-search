import { makeOptions, innerSearch } from "./utils/";
import { type SearchOptions } from "./types";
/**
 * Relative to the base directory.
 */
type RelativePath = string;
/**
 * Recursively search and retrieve full paths.
 * @param baseDirectoryPath - path to the base directory
 * @param options - search options {@link SearchOptions}
 * @returns array of paths
 */
export async function search(
  baseDirectoryPath: string,
  options: Partial<SearchOptions> = {}
): Promise<RelativePath[]> {
  const filepaths: string[] = [];
  const results = await innerSearch(
    baseDirectoryPath,
    filepaths,
    makeOptions(options)
  );
  return results;
}
