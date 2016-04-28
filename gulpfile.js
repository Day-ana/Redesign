var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


gulp.task('scripts', function(){
	gulp.src('js/*js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});