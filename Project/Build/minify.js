const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const dereserve = require('gulp-dereserve');
const util = require('gulp-util');
const defaults = require('defaults-deep');
const settings = require('../Scripts/settings');
config = settings(util.env.settings);

gulp.task('minify', function(callback) {
	console.log('Minifying: ' + config.built.file);
	return gulp.src(config.built.full)
	.pipe(sourcemaps.init())
	.pipe(uglify({
		inSourceMap: config.built.fullMap,
		outSourceMap: config.built.minMap,
		mangle: {
			toplevel: true,
			screw_ie8: true
		},
		compress: {
			screw_ie8: true,
			sequences: true,
			properties: true,
			dead_code: true,
			drop_debugger: true,
			comparisons: true,
			conditionals: true,
			evaluate: true,
			booleans: true,
			loops: true,
			unused: true,
			hoist_funs: true,
			if_return: true,
			join_vars: true,
			cascade: true,
		}
	}))
	.pipe(dereserve())
	.pipe(rename(function(path) {
		if (path.extname === '.js') {
			path.extname = ".min.js"
		}
	}))
	.pipe(sourcemaps.write('./', {
		addComment: false
	}))
	.pipe(gulp.dest(config.built.folder));
});