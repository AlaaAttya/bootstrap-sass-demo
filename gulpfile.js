
var gulp = require('gulp');
var sass = require('gulp-sass');

var sassPaths = [
  'bower_components/bootstrap-sass'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});