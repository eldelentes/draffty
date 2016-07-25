var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('autoprefixer', function(){
	return gulp.src('./css/*.css')
		.pipe(autoprefixer({
		    browsers: ['last 3 versions'],
		    cascade: false
		}))
		.pipe(gulp.dest('./css'))
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass', 'autoprefixer']);
});

gulp.task('default', ['watch', 'connect']);