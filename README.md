# simple-recursive-search

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Async function that retrieves file and directory paths.

This is still an experimental version.

## Installation

`$ npm i simple-recursive-search`

## Usage

```typescript
import { search: recursiveSearch } from "simple-recursive-search";

recursiveSearch(".",{
  excludeDir:(dirname) => /node_modules/.test(dirname),
  excludeFilename:(filename) => filename.endsWith(".jpg"),
  files:true,// default, dont need to pass
  directories:false//default, dont need to pass
  dotFiles:false//default, dont need to pass
}).then((result) => {
  console.log(result);
});
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
