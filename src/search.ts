import { opendir } from 'node:fs/promises';
import { join } from 'node:path';

import { makeOptions } from './utils';
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
  options: Partial<SearchOptions> = {},
): Promise<Path[]> {
  const filepaths: string[] = [];
  const results = await innerSearch(
    baseDirectoryPath,
    filepaths,
    makeOptions(options),
  );
  return results;
}

export interface SearchOptions {
  /**
   * default: null
   * Not applied to the path, just to the filename.
   * @example excludeFilename: (filename) => filename.startsWith('sample')
   * Another example, return only jpg files
   * @example excludeFilename: (name) => !name.endsWith('.jpg'),
   */
  excludeFilename: ((filename: string) => boolean) | null;
  /**
   * default: null
   * Not applied to the path, just to the dirname.
   * @example excludeDir: (dirname) => /node_modules/.test(dirname)
   */
  excludeDir: ((dirname: string) => boolean) | null;
  /**
   * default: false
   */
  wantDirectories: boolean;
  /**
   * default: true
   */
  wantFiles: boolean;
  /**
   * default: false
   */
  dotFiles: boolean;
}

async function innerSearch(
  baseDirectoryPath: string,
  filepaths: string[],
  options: SearchOptions,
) {
  const baseDir = await opendir(baseDirectoryPath, {
    encoding: 'utf8',
  });
  const { excludeDir, excludeFilename, wantDirectories, wantFiles, dotFiles } =
    options;

  for await (const dir of baseDir) {
    const iName = dir.name; //item name

    if (!dotFiles && iName.startsWith('.')) continue;

    const path = join(baseDirectoryPath, iName);

    if (dir.isFile() && wantFiles) {
      const passes = !excludeFilename || !excludeFilename(iName);
      if (passes) filepaths.push(path);
    } else if (dir.isDirectory()) {
      if (excludeDir && excludeDir(iName)) {
        continue;
      } else if (wantDirectories) {
        filepaths.push(path);
      }
      await innerSearch(path, filepaths, options);
    }
  }
  return filepaths;
}
