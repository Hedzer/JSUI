var path = require('path');
var defaults = require('defaults-deep');
var build = require('./Settings/build.json');
var hasTransformed = false;

var root = path.resolve(path.join(__dirname, '../'));
module.exports = function build_settings(settings) {
	var config = defaults((build[settings] || {}), build.default);

	if (hasTransformed) { return config; }

	//convert aliases to absolute
	Object.keys(config.aliases || {}).forEach(function(key){
		config.aliases[key] = path.join(root, config.aliases[key]);
	});

	config.entry = path.join(root, config.entry);
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

	return config;
}