const fs = require('fs');
const path = require('path');
const defaults = require('defaults-deep');
const util = require('gulp-util');
var build = require('../Settings/build.json');
var hasTransformed = false;

const root = path.resolve(path.join(__dirname, '../../'));
var cached;
module.exports = function build_settings(settings) {

	if (hasTransformed) { return cached; }

	var config = defaults((build[settings] || {}), build.default);

	//convert aliases to absolute
	Object.keys(config.aliases || {}).forEach((key) => {
		config.aliases[key] = path.join(root, config.aliases[key]);
	});

	var source = path.join(root, config.source.folder);

	//get version
	var version = util.env.version;
	var numbers = /\d+/g;
	if (!version && version !== 0) {
		var folders = fs.readdirSync(source).filter(dir => fs.statSync(path.join(source, dir)).isDirectory());
		var max = 10000;
		var mapper = (n) => { return n.match(numbers); };
		var reducer = (current, value, index) => {
			return current + value * (max / Math.pow(10, index));
		};
		folders.sort((a, b) => {
			a = a.split('.').map(mapper).reduce(reducer, 0);
			b = b.split('.').map(mapper).reduce(reducer, 0);
			return (b - a);
		});
		version = folders[0];
	}

	var isPolyfilled = !!util.env.polyfilled;

	config.entry = path.join(source, version, isPolyfilled ? config.source.polyfilled : config.source.file);
	config.built = (config.built || {});
	config.built.folder = path.join(root, config.built.folder);

	//generte full path
	var full = path.join(config.built.folder, config.built.file);
	config.built.full = full;
	config.built.fullMap = full + '.map';

	//generate minned path
	var builtExt = path.extname(full);
	var min = full.substring(0, full.length - builtExt.length) + '.min' + builtExt;
	config.built.min = min;
	config.built.minMap = min + '.map';

	hasTransformed = true;
	cached = config;

	return config;
}