const minimist = require('minimist')

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}

const options = minimist(process.argv.slice(2), envSettings)
const production = options.env === 'production'

const config = {
  dirs: {
    src: './src',
    dist: './dist',
    baseDir: './dist'
  },
  envProduction: production
}

const tasks = {
  ejs: {
    src: `${config.dirs.src}/ejs/**/*.ejs`,
    dist: `${config.dirs.dist}/`,
    exc: `${config.dirs.src}/ejs/**/_*.ejs`
  },
  scss: {
    src: `${config.dirs.src}/scss/style.scss`,
    dist: `${config.dirs.dist}/assets/css`
  },
  webpack: {
    src: `${config.dirs.src}/js/index.js`,
    dist: `${config.dirs.dist}/assets/js`,
    filename: 'bundle.js'
  },
  watch: {
    ejs: [`${config.dirs.src}/ejs/**/*.ejs`],
    css: [`${config.dirs.src}/scss/**/*.scss`],
    image: [`${config.dirs.src}/images/**/*`],
    webpack: [`${config.dirs.src}/js/**/*.js`]
  },
  images: {
    src: `${config.dirs.src}/images`,
    dist: `${config.dirs.dist}/assets/images`
  },
  fonts: {
    src: `${config.dirs.src}/fonts/**/*`,
    dist: `${config.dirs.dist}/assets/fonts`
  },
  server: {
    browserSyncOptions: {
      server: {
        baseDir: `${config.dirs.baseDir}`
      },
      open: 'external'
    }
  },
  clean: [config.dirs.dist]
}

config.tasks = tasks
module.exports = config
