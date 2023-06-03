export type SearchOptions = {
  /**
   * default: null
   */
  filter: ((path: string) => boolean) | null;
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
