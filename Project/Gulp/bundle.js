gulp.task('bundle', function(callback) {
	console.log('-> Building...');
	return rollup({
			entry: './Framework/JSUI.js',
			format: 'iife',
			moduleName: 'JSUI',
			sourceMap: true,
			plugins: [
				rollup_alias({
					Paths: paths,
					Extensions: ['js']
				}),
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