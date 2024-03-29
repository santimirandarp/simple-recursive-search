# simple-recursive-search

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Async function that retrieves file and directory paths.

This is still an experimental version.

This retrieves the relative path (not just the filenames.), so it's simple to:

* rename,
*  move
*  or change these files.

Currently it will descend up to the last directory in a tree. A safety limit `depth` may be added soon.

## Installation

`$ npm i simple-recursive-search`

## Usage

```typescript
import { search: recursiveSearch } from "simple-recursive-search";

recursiveSearch(".",{
  excludeDirs:(dirname) => /node_modules/.test(dirname),
  excludeFiles:(filename) => filename.endsWith(".jpg"),
  wantFiles:true,// default, dont need to pass
  wantDirectories:false//default, dont need to pass
  dotFiles:false//default, dont need to pass
}).then((matches) => {
  console.log(matches);
});

```

Or using `await`

```typescript
import { search: recursiveSearch } from "simple-recursive-search";
async function run(){
const listOfFilesMatched = await recursiveSearch(".",{
  excludeDirs:(dirname) => /node_modules/.test(dirname)
})}
console.log(listOfFilesMatched)
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/simple-recursive-search.svg
[npm-url]: https://www.npmjs.com/package/simple-recursive-search
[ci-image]: https://github.com/santimirandarp/simple-recursive-search/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/santimirandarp/simple-recursive-search/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/santimirandarp/simple-recursive-search.svg
[codecov-url]: https://codecov.io/gh/santimirandarp/simple-recursive-search
[download-image]: https://img.shields.io/npm/dm/simple-recursive-search.svg
[download-url]: https://www.npmjs.com/package/simple-recursive-search
