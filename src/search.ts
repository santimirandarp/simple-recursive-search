import { type SearchOptions } from "./types";
import { makeOptions, innerSearch } from "./utils";
/**
 *  From the base directory.
 */
type Path = string;
/**
 * Recursively search and retrieve paths.
 * @param baseDirectoryPath - path to the base directory
 * @param options - search options {@link SearchOptions}
 * @returns Array of paths
 */
export async function search(
  baseDirectoryPath: string,
  options: Partial<SearchOptions> = {}
): Promise<Path[]> {
  const filepaths: string[] = [];
  const results = await innerSearch(
    baseDirectoryPath,
    filepaths,
    makeOptions(options)
  );
  return results;
}
