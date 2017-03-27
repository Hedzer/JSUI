var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rollup = require('rollup-stream');
var rollup_babel = require('rollup-plugin-babel');
var rollup_import = require('rollup-plugin-root-import');
var rollup_alias = require('rollup-plugin-import-alias');
var util = require('gulp-util');
var dereserve = require('gulp-dereserve');
var runSequence = require('run-sequence');

//jobs
require('./Project/Build/bundle');
require('./Project/Build/bundle-es6');
require('./Project/Build/minify');
require('./Project/Build/dev');
require('./Project/Build/production');
require('./Project/Build/default');
