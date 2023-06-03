export type SearchOptions = {
  /** With access to the full path */
  filter: ((path: string) => boolean) | null;
  directories: boolean;
  files: boolean;
  dotFiles: boolean;
};
