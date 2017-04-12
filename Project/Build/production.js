const gulp = require('gulp');
const runSequence = require('run-sequence');
const util = require('gulp-util');


require('./bundle');
require('./minify');
require('./external');

module.exports = gulp.task('production', function(){
	runSequence([util.env.es6 ? 'bundle-es6' : 'bundle'], ['minify'], 'external');
});