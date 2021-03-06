#!/usr/bin/env node

'use strict';
var fs = require('fs');
var path = require('path');
var meow = require('meow');
var yaml = require('js-yaml');
var inquirer = require('inquirer');

var cli = meow([
	'Usage',
	'  $ update-travis',
	'',
	'Options',
	'  --versions Specify the versions you want to support (separated by a `,`)',
	'',
	'Examples',
	'  $ update-travis',
	'  $ update-travis --versions 6,5,4,0.10',
	'  $ update-travis --versions stable,0.12'
]);

var filepath = path.join(process.cwd(), '.travis.yml');
var doc = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));

var questions = [{
	type: 'string',
	name: 'versions',
	message: 'What versions do you wish to support? (Separate them by `,`)',
	default: cli.flags.versions || doc.node_js.join(','),
	when: !cli.flags.versions
}];

inquirer.prompt(questions)
.then(function (answers) {
	var versions = answers.versions || cli.flags.versions;
	if (!versions.length) {
		return;
	}
	doc.node_js = versions.split(','); // eslint-disable-line camelcase
	fs.writeFileSync(filepath, yaml.dump(doc), 'utf8');
	var updateAndCommitMsg = '  update-travis --versions ' + versions +
		' && git add .travis.yml && git commit -m "Update Node.js version for Travis"';
	console.log('Done!\nFor migrating your next project, run:\n' + updateAndCommitMsg);
	console.log('To also push, run:\n' + updateAndCommitMsg + ' && git push origin HEAD');
});
