var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
});

gulp.task('autoprefixer', function(){
	return gulp.src('client/app.css')
		.pipe(autoprefixer({
		    browsers: ['last 2 versions'],
		    cascade: false
		}))
		.pipe(gulp.dest('dist'));
});