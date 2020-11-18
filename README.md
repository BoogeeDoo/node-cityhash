# CityHash for Node.js

[![cityhash](http://img.shields.io/npm/v/google-cityhash.svg)](https://www.npmjs.org/package/google-cityhash)
[![cityhash](http://img.shields.io/npm/dm/google-cityhash.svg)](https://www.npmjs.org/package/google-cityhash)
[![Test & Coverage](https://github.com/BoogeeDoo/node-cityhash/workflows/Test%20&%20Coverage/badge.svg)](https://github.com/BoogeeDoo/node-cityhash)
[![Coverage Status](https://coveralls.io/repos/github/BoogeeDoo/node-cityhash/badge.svg?branch=master)](https://coveralls.io/github/BoogeeDoo/node-cityhash?branch=master)
[![License](https://img.shields.io/npm/l/google-cityhash.svg?style=flat)](https://www.npmjs.org/package/google-cityhash)
[![Dependencies Status](https://img.shields.io/david/XadillaX/cityhash)](https://www.npmjs.org/package/google-cityhash)
[![Star at GitHub](https://img.shields.io/github/stars/BoogeeDoo/node-cityhash.svg?style=social&label=Star)](https://github.com/BoogeeDoo/node-cityhash)

Pure JavaScript implement for CityHash. (No C++ binding)

## Installation

```bash
$ npm install --save google-cityhash
```

## Usage

```js
const hash = require('google-cityhash');
```

### CityHash 32

```js
const ret = hash.city32('text');
```

Returns a hash number.

### CityHash 64

```js
const ret = hash.city64('text');
```

Returns a [Long](https://npmjs.com/long) object.

### CityHash 128

```js
const ret = hash.city128('text');
```

Returns a [City128Value](https://github.com/XadillaX/bling_hashes_js/blob/master/lib/city128.d.ts) object.

## Contribution

You're welcome to make pull requests.

「雖然我覺得不怎麼可能有人會關注我」
