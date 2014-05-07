var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var pathsJs = [
	'js/bonsai-app/*.js',
	'js/bonsai-app/controllers/*.js',
	'js/bonsai-app/services/*.js',
	'bonsai.json'
];

// lints
gulp.task('lint',function(){
	return gulp.src(pathsJs)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//minify js
gulp.task('scripts',function(){
	return gulp.src(pathsJs)
		.pipe(livereload());
});

// watch index.html without lint...
gulp.task('html',function(){
	return gulp.src('*.html')
		.pipe(livereload());
});

gulp.task('watch',function(){
	gulp.watch(pathsJs,['lint','scripts','html']);
});

gulp.task('default',['watch']);