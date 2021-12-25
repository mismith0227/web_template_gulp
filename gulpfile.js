const { src, dest, watch, series, parallel } = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync')
const config = require('./config')
const cssnano = require('cssnano')
const del = require('del')
const ejs = require('gulp-ejs')
const fibers = require('fibers')
const fs = require('fs')
const htmlmin = require('gulp-html-minifier')
const htmlbeautify = require('gulp-html-beautify')
const imagemin = require('gulp-imagemin')
const imageminGif = require('imagemin-gifsicle')
const imageminSvg = require('imagemin-svgo')
const mozjpeg = require('imagemin-mozjpeg')
const plumber = require('gulp-plumber')
const pngquant = require('imagemin-pngquant')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))
const setting = require('./settings')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// EJS
// =====================================================
const compileEjs = (done) => {
  // サイト設定ファイルの読み込み.
  const siteSetting = JSON.parse(fs.readFileSync('./setting-site.json', 'utf8'))

  src([`${config.tasks.ejs.src}`, `!${config.tasks.ejs.exc}`])
    .pipe(plumber())
    .pipe(
      ejs({
        siteSetting
      })
    )
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlmin(setting.htmlmin))
    .pipe(htmlbeautify(setting.htmlbeautify))
    .pipe(dest(`${config.tasks.ejs.dist}`))
  done()
}

// SCSS
// =====================================================
const compileScss = (done) => {
  const postcssPlugins = [
    autoprefixer(setting.autoprefixer),
    cssnano(setting.cssnano)
  ]

  src(`${config.tasks.scss.src}`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: config.envProduction ? 'compressed' : 'expanded',
        fiber: fibers
      }).on('error', sass.logError)
    )
    .pipe(postcss(postcssPlugins))
    .pipe(dest(config.tasks.scss.dist))
  done()
}

// images
// =====================================================
const imageMin = (done) => {
  src(`${config.tasks.images.src}/**/*`)
    .pipe(
      imagemin([
        pngquant(setting.pngquant),
        mozjpeg(setting.mozjpeg),
        imageminGif(setting.imageminGif),
        imageminSvg()
      ])
    )
    .pipe(dest(`${config.tasks.images.dist}`))
  done()
}

const exelCopy = (done) => {
  src(`${config.tasks.images.src}/**/*.xlsx`).pipe(
    dest(`${config.tasks.images.dist}`)
  )
  done()
}

// webpack
// =====================================================
const compileJavascript = (done) => {
  src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.tasks.webpack.dist))
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
  watch(config.tasks.watch.ejs, compileEjs).on('change', browserSync.reload)
  watch(config.tasks.watch.css, compileScss).on('change', browserSync.reload)
  watch(config.tasks.watch.webpack, compileJavascript).on(
    'change',
    browserSync.reload
  )
  watch(config.tasks.watch.image, imageMin).on('change', browserSync.reload)
  done()
}

// Tasks
// =====================================================
exports.default = series(
  parallel(imageMin, exelCopy, compileScss, compileEjs, compileJavascript),
  server,
  watchFile
)

exports.dev = series(
  parallel(imageMin, exelCopy, compileScss, compileEjs, compileJavascript),
  server,
  watchFile
)

exports.build = series(
  clean,
  parallel(imageMin, exelCopy, compileScss, compileEjs, compileJavascript)
)
