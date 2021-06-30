export const Wave = () => {
  let unit = 100
  let canvas
  let context
  let height
  let width
  let xAxis
  let yAxis

  function init() {
    canvas = document.getElementById('waveCanvas')

    canvas.width = document.documentElement.clientWidth
    canvas.height = 300

    context = canvas.getContext('2d')

    height = canvas.height
    width = canvas.width

    xAxis = Math.floor(height / 2)
    yAxis = 0

    draw()
  }

  function draw() {
    context.clearRect(0, 0, width, height)

    drawWave('#000', 1, 3, 0)

    draw.seconds = draw.seconds + 0.009
    draw.t = draw.seconds * Math.PI
    setTimeout(draw, 35)
  }
  draw.seconds = 0
  draw.t = 0

  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color
    context.globalAlpha = alpha

    context.beginPath()
    drawSine(draw.t / 0.5, zoom, delay)
    context.lineTo(width + 10, height)
    context.lineTo(0, height)
    context.closePath()
    context.fill()
  }

  function drawSine(t, zoom, delay) {
    let x = t
    let y = Math.sin(x) / zoom
    context.moveTo(yAxis, unit * y + xAxis)

    for (let i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom
      y = Math.sin(x - delay) / 3
      context.lineTo(i, unit * y + xAxis)
    }
  }

  init()
}
