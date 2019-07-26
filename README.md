## Linx Impulse Wishlist Javascript SDK

[![Version][version-img]][package-url] [![CircleCI][circleci-img]][circleci-url] [![Dependencies][david-img]][david-url] [![Dev Dependencies][david-dev-img]][david-dev-url] [![License][license-img]][license-url] [![Downloads][downloads-img]][downloads-url] [![jsDelivr Hits][jsdelivr-img]][jsdelivr-url]

[circleci-img]: https://circleci.com/gh/chaordic/engage-wishlist-sdk-js.svg?style=shield
[circleci-url]: https://circleci.com/gh/chaordic/engage-wishlist-sdk-js
[david-img]: https://img.shields.io/david/chaordic/engage-wishlist-sdk-js.svg
[david-url]: https://david-dm.org/chaordic/engage-wishlist-sdk-js
[david-dev-img]: https://img.shields.io/david/dev/chaordic/engage-wishlist-sdk-js.svg
[david-dev-url]: https://david-dm.org/chaordic/engage-wishlist-sdk-js?type=dev
[version-img]: https://img.shields.io/npm/v/@linx-impulse/engage-wishlist-sdk-js.svg?style=flat-square
[package-url]: https://npmjs.org/package/@linx-impulse/engage-wishlist-sdk-js
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE.txt
[downloads-img]: https://img.shields.io/npm/dm/@linx-impulse/engage-wishlist-sdk-js.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=@linx-impulse/engage-wishlist-sdk-js
[jsdelivr-img]: https://data.jsdelivr.com/v1/package/npm/@linx-impulse/engage-wishlist-sdk-js/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@linx-impulse/engage-wishlist-sdk-js

SDK to build frontend Web Applications for Linx Impulse Wishlist.

## Getting started

### Installation

To install the Wishlist SDK just run:

```sh
npm install @linx-impulse/engage-wishlist-sdk-js
```

### Usage

After installing the SDK you can use any of the modules by including them in your code

Example:

```javascript
import { Likes } from '@linx-impulse/engage-wishlist-sdk-js'
```

## Project Strucutre

This repository is divided into three main modules:

### Items

Responsible for operations that center around items (which currently is just fetching the like frequency).

### Likes

Contains all functions that are used for the default 'Likes' workflow, which are the main way to interact with the API.

### Lists

Contains functions that manipulates custom lists.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Documentation

Run doc command to generate docs:
  ```sh
    npx run doc
  ```

## Lint

Run lint command:
  ```sh
    npx run lint [--fix]
  ```

Options:
* fix: automatically fixes errors found.

## Testing

Run lint command:
  ```sh
    npx run test [--watch]
  ```

Options:
* watch: Run tests in a watch mode

## Release

Run release command:
  ```sh
  npx run release
  ```

## Changelog

[CHANGELOG](CHANGELOG.md)
