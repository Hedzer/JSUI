const gulp = require('gulp');
const util = require('gulp-util');

require('./dev');
require('./production');
require('./external');

module.exports = gulp.task('default', function() {
	if (util.env['external-only']) {
		return gulp.start('external');
	}
	if (util.env.production) {
		return gulp.start('production');
	}
	return gulp.start('dev');
});