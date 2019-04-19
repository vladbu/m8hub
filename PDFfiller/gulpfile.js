const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const cleanCSS = require('gulp-clean-css');

function css() {
  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(dest('dist/css/'))
}

function html() {
  return src('app/*.pug')
    .pipe(pug())
    .pipe(dest('dist/'))
}

function js() {
  return src('app/js/*.js')
    .pipe(dest('dist/js/'))
}

function img() {
  return src('app/img/*')
    .pipe(dest('dist/img/'))
}

exports.default = function () {
  watch('app/scss/*.scss', css)
  watch('app/*.pug', html)
  watch('app/js/*.js', js)
  watch('app/img/*', img)
}
