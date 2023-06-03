import { opendir } from "node:fs/promises";
import { join } from "node:path";
import { SearchOptions } from "../types";

export async function innerSearch(
  baseDirectoryPath: string,
  filepaths: string[],
  options: SearchOptions
) {
  const baseDir = await opendir(baseDirectoryPath, {
    encoding: "utf8",
  });
  for await (const dir of baseDir) {
    const skipDot = !options.dotFiles && dir.name.startsWith(".");
    if (skipDot) continue;

    const path = join(baseDirectoryPath, dir.name);

    if (dir.isFile() && options.files) {
      const passesFilter = options.filter ? options.filter(dir.name) : true;
      if (passesFilter) filepaths.push(path);
    } else if (dir.isDirectory()) {
      if (options.directories === true) {
        filepaths.push(path);
      }
      await innerSearch(path, filepaths, options);
    }
  }
  return filepaths;
}
