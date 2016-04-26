# update-travis [![Build Status](https://travis-ci.org/jfmengels/update-travis.svg?branch=master)](https://travis-ci.org/jfmengels/update-travis)

> Utility to update `.travis.yml` to newer Node.js versions


## Install

```
$ npm install -g update-travis
```

## Usage

```
$ cd path/to/my/project
$ update-travis
```

Then answer a question, and you'll be good to go.

## CLI

```
$ npm install --global update-travis
```

```
$ update-travis --help

  Utility to update `.travis.yml` to newer Node.js versions

  Usage
    $ update-travis

  Options
    --versions Specify the versions you want to support (separated by a `,`)

  Examples
    $ update-travis
    $ update-travis --versions 6,5,4,0.10
    $ update-travis --versions stable,0.12
```


## License

MIT © [Jeroen Engels](http://github.com/jfmengels)
