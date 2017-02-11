var gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	htmlreplace = require('gulp-html-replace'),
	ts = require('gulp-typescript');

var distDir = './build/',
    sourceDir = './src/';

gulp.task('serve', function() {
	connect.server({
		root: distDir,
		port: 2345,
		livereload: true
	});
	gulp.watch('src/**/*.*', ['build', 'images', 'styles', 'vendor']);
});

gulp.task('images', function() {
	gulp.src(sourceDir + '**/*.{jpg,png,gif}')
		.pipe(gulp.dest(distDir));
});

gulp.task('styles', function() {
	gulp.src(sourceDir + '**/*.css')
		.pipe(gulp.dest(distDir));
});

gulp.task('build', function() {
	gulp.src([sourceDir + '**/*.ts'])
		.pipe(ts({
			noImplicitAny: true,
			out: 'main.js'
		}))
		.pipe(gulp.dest(distDir))
		.pipe(connect.reload());
});

gulp.task('vendor', function() {
	gulp.src(sourceDir + '**/*.html')
		.pipe(htmlreplace({
			'vendor': 'vendor.js',
			'js': 'main.js'
		}))
		.pipe(gulp.dest(distDir));
});

gulp.task('lint', function() {
	gulp.src(sourceDir + '**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
});

gulp.task('default', ['build', 'images', 'styles', 'vendor']);