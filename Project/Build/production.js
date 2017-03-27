const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./bundle');
require('./minify');

module.exports = gulp.task('production', function(){
	runSequence([util.env.es6 ? 'bundle-es6' : 'bundle'], ['minify']);
});