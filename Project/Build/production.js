const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./bundle');
require('./minify');

module.exports = gulp.task('production', function(){
	runSequence(['bundle'], ['minify']);
});