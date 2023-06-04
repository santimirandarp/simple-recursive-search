export type SearchOptions = {
  /**
   * default: null
   * Not applied to the path, just to the filename.
   */
  filterByFilename: ((filename: string) => boolean) | null;
  /**
   * default: null
   * Not applied to the path, just to the dirname.
   */
  filterByDirname: ((dirname: string) => boolean) | null;
  /**
   * default: false
   */
  directories: boolean;
  /**
   * default: true
   */
  files: boolean;
  /**
   * default: false
   */
  dotFiles: boolean;
};
