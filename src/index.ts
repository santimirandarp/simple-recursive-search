import { opendir } from "node:fs/promises";
import { resolve, join } from "node:path";

type SearchOptions = {
  /** With access to the full path */
  filter: ((path: string) => boolean) | null;
  directories: boolean;
  files: boolean;
  dotFiles: boolean;
};
/**
 * Relative to the base directory.
 */
type RelativePath = string;
/**
 * Recursively search and retrieve full paths.
 * @param baseDirectoryPath - path to the base directory
 * @returns array of paths
 */
export async function search(
  baseDirectoryPath: string,
  options: Partial<SearchOptions> = {}
): Promise<RelativePath[]> {
  const filepaths: string[] = [];
  const completeOptions: SearchOptions = {
    filter: null,
    directories: false,
    files: true,
    dotFiles: false,
    ...options,
  };
  const results = await innerSearch(
    resolve(baseDirectoryPath),
    filepaths,
    completeOptions
  );
  return results;
}

export async function innerSearch(
  baseDirectoryPath: string,
  filepaths: string[],
  options: SearchOptions
) {
  const baseDir = await opendir(baseDirectoryPath, {
    encoding: "utf8",
  });
  for await (const dir of baseDir) {
    const passesFilter = options.filter ? options.filter(dir.name) : true;
    const passesDot = options.dotFiles ? true : !dir.name.startsWith(".");
    if (passesFilter && passesDot) continue;
    if (dir.isFile() && options.files) {
      filepaths.push(join(baseDirectoryPath, dir.name));
    } else if (dir.isDirectory() && options.directories) {
      await innerSearch(join(baseDirectoryPath, dir.name), filepaths, options);
    }
  }
  return filepaths;
}
