# update-travis [![Build Status](https://travis-ci.org/jfmengels/update-travis.svg?branch=master)](https://travis-ci.org/jfmengels/update-travis)

> My fantabulous module


## Install

```
$ npm install --save update-travis
```


## Usage

```js
const updateTravis = require('update-travis');

updateTravis('unicorns');
//=> 'unicorns & rainbows'
```


## API

### updateTravis(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global update-travis
```

```
$ update-travis --help

  Usage
    update-travis [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ update-travis
    unicorns & rainbows
    $ update-travis ponies
    ponies & rainbows
```


## License

MIT © [Jeroen Engels](http://github.com/jfmengels)
