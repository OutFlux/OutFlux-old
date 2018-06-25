const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
 
gulp.task('babel', _ =>
  gulp.src('app/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/'))
);
gulp.task('scss', _ => {
  return gulp.src('app/css/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});

// 
gulp.task('build', gulp
  .series(gulp
    .parallel('scss', 'babel')))


gulp.watch('app/**/*', gulp.series('build'));