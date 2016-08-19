var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
//var watchify = require('watchify');
var babel = require('babelify');

gulp.task('default', function() {
  return browserify('./ES6/JSUI.js', { debug: true })
    .transform(babel, {presets: ["es2015"]})
    .pipe(gulp.dest('./build'));
});

// function compile(watch) {
//   var bundler = browserify('./ES6/JSUI.js', { debug: true }).transform(babel, {presets: ["es2015"]});

//   function rebundle() {
//     return bundler.bundle()
//       .on('error', function(err) { console.error(err); this.emit('end'); })
//       .pipe(source('JSUI.js'))
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest('./build'));
//   }

//   if (watch) {
//     bundler.on('update', function() {
//       console.log('-> bundling...');
//       return rebundle();
//     });
//   }

//   return rebundle();
// }

// function watch() {
//   return compile(true);
// };

// gulp.task('build', function() { return compile(); });
// gulp.task('watch', function() { return watch(); });

// gulp.task('default', ['build']);