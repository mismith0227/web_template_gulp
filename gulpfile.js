const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const config = require('./config')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// HTML
// =====================================================
const html = (done) => {
  gulp
    .src(`${config.tasks.html.src}`)
    .pipe(gulp.dest(`${config.tasks.html.dest}`))
  done()
}

// SCSS
// =====================================================
const compileScss = (done) => {
  gulp
    .src(`${config.tasks.scss.src}`, `!${config.tasks.scss.exc}`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: config.envProduction ? 'compressed' : 'nested'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest(config.tasks.scss.dest))
  done()
}

// webpack
// =====================================================
const compileJavascript = (done) => {
  gulp
    .src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.tasks.webpack.dest))
  done()
}

// Clean
// =====================================================
const clean = (cb) => {
  return del(config.tasks.clean, cb)
}

// Server
// =====================================================
const server = (done) => {
  browserSync.init(config.tasks.server.browserSyncOptions)
  done()
}

// Watch
// =====================================================
const watchFile = (done) => {
  gulp.watch(config.tasks.watch.html, html).on('change', browserSync.reload)
  gulp
    .watch(config.tasks.watch.css, compileScss)
    .on('change', browserSync.reload)
  gulp
    .watch(config.tasks.watch.webpack, compileJavascript)
    .on('change', browserSync.reload)
  done()
}

// Tasks
// =====================================================
exports.default = gulp.series(
  gulp.parallel(compileScss, html, compileJavascript),
  server,
  watchFile
)

exports.dev = gulp.series(
  clean,
  gulp.parallel(compileScss, html, compileJavascript),
  server,
  watchFile
)

exports.build = gulp.series(
  clean,
  gulp.parallel(compileScss, html, compileJavascript)
)
