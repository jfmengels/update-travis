#!/usr/bin/env node
'use strict';
var meow = require('meow');
var updateTravis = require('./');

var cli = meow([
	'Usage',
	'  $ update-travis [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ update-travis',
	'  unicorns & rainbows',
	'  $ update-travis ponies',
	'  ponies & rainbows'
]);

console.log(updateTravis(cli.input[0] || 'unicorns'));
