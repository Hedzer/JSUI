var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var footer = require('gulp-footer');
var helpers = require('babelify-external-helpers');
//var watchify = require('watchify');


gulp.task('build', function(cb) {
  console.log('-> building...');
  return browserify('./ES6/JSUI.js', { debug: true })
        .transform(babelify, {presets: ["es2015"], plugins: ['external-helpers-2'] })
        .plugin(helpers)
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('JSUI.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
    cb();
});
gulp.task('uglify', function() {
  console.log('-> uglifying...');
  return gulp.src('./build/JSUI.js')
      .pipe(sourcemaps.init())
      .pipe(uglify({
        inSourceMap: './build/JSUI.js.map',
        outSourceMap: 'JSUI.min.js.map'
      }))
      .pipe(rename(function(path) {
        if (path.extname === '.js') {
          path.extname = ".min.js"
        }
      }))
      .pipe(sourcemaps.write('./build', {addComment: false}))
      .pipe(gulp.dest('./build'))
});
gulp.task('dev', ['build']);
gulp.task('production', ['dev', 'uglify']);
gulp.task('watch', function() { return watch(); });
gulp.task('default', ['dev']);