var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');

gulp.task('styles', function() {
  gulp.src('./styles/main.less')
      .pipe(less())
      .pipe(gulp.dest('./css'));
});

gulp.task('views', function() {
  gulp.src('./views/**/*.jade')
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles', 'views'], function() {
  console.log('Site built !');
});