var gulp = require('gulp');
var sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
 
gulp.task('babel', () =>
    gulp.src('app/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/'))
);
gulp.task('scss', function(){
  return gulp.src('app/css/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});



gulp.task('build', ['scss', 'babel']);
