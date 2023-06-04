# simple-recursive-search

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Simple and lightweight tool to recursively retrieve file and directory paths.

It will return any files and optionally dotfiles, and optionally directories. You can filter all by name as well.

This is still a very unreliable version.

## Installation

`$ npm i simple-recursive-search`

## Usage

```typescript
import { search } from "simple-recursive-search";

const result = search(args).then((result) => {
  console.log(result);
});
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/simple-recursive-search.svg
[npm-url]: https://www.npmjs.com/package/simple-recursive-search
[ci-image]: https://github.com/santimirandarp/simple-recursive-search/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/santimirandarp/simple-recursive-search/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/santimirandarp/simple-recursive-search.svg
[codecov-url]: https://codecov.io/gh/santimirandarp/simple-recursive-search
[download-image]: https://img.shields.io/npm/dm/simple-recursive-search.svg
[download-url]: https://www.npmjs.com/package/simple-recursive-search

```

```
