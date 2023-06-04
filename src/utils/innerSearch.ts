import { opendir } from 'node:fs/promises';
import { join } from 'node:path';

import { SearchOptions } from '../types';

export async function innerSearch(
  baseDirectoryPath: string,
  filepaths: string[],
  options: SearchOptions,
) {
  const baseDir = await opendir(baseDirectoryPath, {
    encoding: 'utf8',
  });
  for await (const dir of baseDir) {
    const iName = dir.name; //item name
    const noDotFiles = !options.dotFiles;
    if (noDotFiles && iName.startsWith('.')) continue;

    const path = join(baseDirectoryPath, iName);

    if (dir.isFile() && options.files) {
      const passesFilter = options.filterFilename
        ? options.filterFilename(iName)
        : true;
      if (passesFilter) filepaths.push(path);
    } else if (dir.isDirectory()) {
      const passesFilter = options.filterDirname
        ? options.filterDirname(iName)
        : true;
      if (!passesFilter) continue;
      if (options.directories) {
        filepaths.push(path);
      }
      await innerSearch(path, filepaths, options);
    }
  }
  return filepaths;
}
