var gulp = require('gulp'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('minify-js', function() {
  gulp.src('assets/*.js').pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js',
    },
    exclude: ['tasks'],
    ignoreFiles: ['*.min.js'],
  })).pipe(gulp.dest('assets'));
});

gulp.task('minify-css', function() {
  return gulp.src('./assets/style.css').
              pipe(cleanCSS({compatibility: 'ie10'})).
              pipe(rename('style.min.css')).
              pipe(gulp.dest('assets'));
});

gulp.task('default', ['minify-css', 'minify-js'])
