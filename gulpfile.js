const { src, dest, watch, series, parallel } = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync')
const config = require('./config')
const del = require('del')
const fibers = require('fibers')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// HTML
// =====================================================
const html = (done) => {
  src(`${config.tasks.html.src}`).pipe(dest(`${config.tasks.html.dest}`))
  done()
}

// SCSS
// =====================================================
sass.compiler = require('sass')
const compileScss = (done) => {
  const postcssPlugins = [
    autoprefixer({
      cascade: false
    })
  ]

  src(`${config.tasks.scss.src}`, `!${config.tasks.scss.exc}`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: config.envProduction ? 'compressed' : 'expanded',
        fiber: fibers
      }).on('error', sass.logError)
    )
    .pipe(postcss(postcssPlugins))
    .pipe(dest(config.tasks.scss.dest))
  done()
}

// webpack
// =====================================================
const compileJavascript = (done) => {
  src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.tasks.webpack.dest))
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
  watch(config.tasks.watch.html, html).on('change', browserSync.reload)
  watch(config.tasks.watch.css, compileScss).on('change', browserSync.reload)
  watch(config.tasks.watch.webpack, compileJavascript).on(
    'change',
    browserSync.reload
  )
  done()
}

// Tasks
// =====================================================
exports.default = series(
  parallel(compileScss, html, compileJavascript),
  server,
  watchFile
)

exports.dev = series(
  clean,
  parallel(compileScss, html, compileJavascript),
  server,
  watchFile
)

exports.build = series(clean, parallel(compileScss, html, compileJavascript))
