'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const path = require('path');
const fs = require('fs');
const getFiles = require('recursive-readdir');
const settings = require('../Scripts/settings');
const fsExtra = require('fs-extra');
config = settings(util.env.settings);

let lists = {};
['ignore', 'copy'].forEach((key) => {
	let result = {};
	lists[key] = result;
	let list = config.external[key];

	if (!('external' in config)) { return; }
	if (!Array.isArray(list)) { return; }
	
	list.forEach((item) => {
		if (typeof item !== 'string') { return; }
		result[item] = true;
	});
});

function externalize(dependency) {
	let extension = path.extname(dependency);
	extension = (typeof extension === 'string' ? extension : '');
	dependency = dependency.substring(0, dependency.length - extension.length)
	let code = [
		`\nimport imports from '/JSUI/Source/1.0.0/Utilities/Dependencies/imports';\n`,
		`\nlet imported = imports('${dependency}');\n`,
		`\nexport default imported;\n`
	].join('');
	return code;
}

module.exports = gulp.task('external', function(callback) {
	let dir = process.cwd();
	console.log(dir);
	let outside = path.join(dir, '../');
	let source = path.join(dir, config.source.folder);
	let destination = path.join(dir, config.external.folder);
	if (destination !== dir) {
		fsExtra.emptydirSync(destination);
	}
	let cache = {};
	getFiles(source, function(err, files) {
		files.forEach((file) => {
			let dependency = '/' + file.replace(outside, '');
			file = file.replace(source, '');
			let sourceFile = path.join(source, file);
			let destFile = path.join(destination, file);
			let destDir = path.dirname(destFile);
			if (lists.ignore[dependency]) { return; }
			if (!cache[destDir]) {
				fsExtra.mkdirsSync(destDir);
				cache[destDir] = true;
			}
			if (lists.copy[dependency]) {
				fsExtra.copySync(sourceFile, destFile);
				return;
			}
			fs.writeFile(destFile, externalize(dependency));
		});
	});
});