const setting = {
  htmlminProduction: {
    collapseWhitespace: true,
    removeComments: true,
    ignoreCustomComments: []
  },
  htmlbeautify: {
    indent_size: 2,
    eol: '\r\n',
    preserve_newlines: false
  },
  autoprefixer: {
    cascade: false,
    grid: true
  },
  cssnano: { autoprefixer: false },
  pngquant: {
    quality: [0.6, 0.8]
  },
  mozjpeg: {
    quality: 85,
    progressive: true
  },
  imageminGif: {
    interlaced: false,
    optimizationLevel: 3,
    colors: 180
  }
}

module.exports = setting
