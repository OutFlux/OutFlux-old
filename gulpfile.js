// declare node Modules
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify')

// Converts ES7 JS to older JS
gulp.task('babel', () =>
  gulp.src('app/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/'))
)

gulp.task('jsx', () =>
  gulp.src('app/**/*.jsx')
    .pipe(babel({
      presets: ['env', 'react']
    }))
    .pipe(gulp.dest('dist/'))
)

// Concats the JS scripts and Uglifies them
gulp.task('jsUglify', () =>
  gulp.src('dist/js/*.js')
  //   .pipe(concat('scripts.js'))
  //   .pipe(gulp.dest('dist/js/'))
  //   .pipe(rename('scripts.min.js'))
  //   .pipe(uglify())
  //   .pipe(gulp.dest('dist/js/'))
)

// converts SCSS to CSS
gulp.task('scss', () => 
  gulp.src('app/css/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
)

// Updates the HTML files
gulp.task('html', () => 
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'))
)

// A combination of all the tasks 
gulp.task('build', 
  gulp.series(
    gulp.parallel('scss', 'babel', 'html'), 
    'jsx'))

// automatically runs when files are updated
gulp.watch('app/**/*', 
  gulp.series('build'))