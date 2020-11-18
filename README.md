# CityHash for Node.js

Pure JavaScript implement for CityHash. (No C++ binding)

## Installation

```bash
$ npm install --save cityhash
```

## Usage

```js
const hash = require('cityhash');
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
