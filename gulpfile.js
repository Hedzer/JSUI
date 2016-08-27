var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var footer = require('gulp-footer');
var rollup = require('rollup-stream');
var rollup_babel = require('rollup-plugin-babel');
var util = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('compress', function(callback) {
	console.log('-> Uglifying...');
	return gulp.src('./build/JSUI.js')
		.pipe(sourcemaps.init())
		.pipe(uglify({
			inSourceMap: './build/JSUI.js.map',
			outSourceMap: 'JSUI.min.js.map',
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
		.pipe(rename(function(path) {
			if (path.extname === '.js') {
				path.extname = ".min.js"
			}
		}))
		.pipe(sourcemaps.write('./build', {
			addComment: false
		}))
		.pipe(gulp.dest('./build'));
});
gulp.task('bundle', function(callback) {
	console.log('-> Building...');
	return rollup({
			entry: './ES6/JSUI.js',
			format: 'iife',
			sourceMap: true,
			plugins: [
				rollup_babel({})
			]
		})
		.pipe(source('JSUI.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build'));
});
gulp.task('dev', function() {
	runSequence(['bundle']);
});
gulp.task('production', function(){
	runSequence(['bundle'], ['compress']);
});
gulp.task('default', function() {
	if (util.env.production) {
		return gulp.start('production');
	}
	return gulp.start('dev');
});
gulp.task('watch', function() {
	gulp.watch('./ES6/**/*.js', ['default']);
});