const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
 
gulp.task('babel', () =>
  gulp.src('app/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/'))
)
gulp.task('scss', () => {
  return gulp.src('app/css/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
})

gulp.task('html', () => {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'))
})

// 
gulp.task('build', gulp
  .series(gulp
    .parallel('scss', 'babel', 'html')))


gulp.watch('app/**/*', gulp.series('build'));