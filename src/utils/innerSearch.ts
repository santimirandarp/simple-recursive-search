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
    const passesFilter = options.filter ? options.filter(dir.name) : true;
    const path = join(baseDirectoryPath, dir.name);

    if (dir.isFile() && options.files && passesFilter) {
      filepaths.push(path);
    } else if (dir.isDirectory()) {
      if (options.directories === true) {
        filepaths.push(path);
      }
      await innerSearch(path, filepaths, options);
    }
  }
  console.log(filepaths);
  return filepaths;
}
