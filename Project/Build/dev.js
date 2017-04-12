const gulp = require('gulp');
const runSequence = require('run-sequence');
const util = require('gulp-util');

require('./bundle');
require('./bundle-es6');
require('./external');

module.exports = gulp.task('dev', function() {
	runSequence([util.env.es6 ? 'bundle-es6' : 'bundle', 'external']);
});