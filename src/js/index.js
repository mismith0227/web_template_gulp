import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { Buttons } from './buttons'
import { Wave } from './wave'
import { ThreeSample } from './threeSample'
import { ScrollEffect } from './scrolleffect'

Buttons()

const container = document.getElementById('canvas-container')
// if (container) {
//   ThreeSample()
// }

ScrollEffect()

// Wave()

// gsap
//   .timeline()
//   .to('.box1', { rotation: 180, x: 500, duration: 5 })
//   .to('.box1', { duration: 1, y: 200 })
//   .to('.box1', { duration: 3, rotation: 360 })

// gsap.registerEffect({
//   name: 'move',
//   defaults: { duration: 2 },
//   effect: (targets, config) => {
//     console.log(config)
//     return gsap
//       .timeline()
//       .to(targets, {
//         rotation: 180,
//         x: 500,
//         duration: 3,
//         delay: config.delay / 2
//       })
//       .to(targets, { duration: 1, y: 200 })
//       .to(targets, { duration: 3, rotation: 360 })
//   }
// })

// document.querySelectorAll('.box').forEach(function (box, index) {
//   console.log(index)
//   gsap.effects.move(box, { delay: index })
//   // box.addEventListener('mouseenter', function () {
//   //   gsap.effects.move(this)
//   // })
// })

gsap.registerEffect({
  name: 'wordFadeIn',
  defaults: { duration: 2 },
  effect: (targets, config) => {
    return gsap.timeline().to(targets, {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: config.delay / 3
    })
  }
})

document.querySelectorAll('.word').forEach(function (box, index) {
  gsap.effects.wordFadeIn(box, { delay: index })
})

gsap.registerPlugin(ScrollTrigger)

// gsap.to('.slide-box', {
//   scrollTrigger: '.slide-box',
//   x: 500,
//   duration: 1,
//   delay: 0.5
// })

gsap.registerEffect({
  name: 'scrollSlideIn',
  defaults: { duration: 2 },
  effect: (targets, config) => {
    return gsap.to(targets, {
      scrollTrigger: { trigger: targets },
      x: 500,
      duration: 1,
      delay: 0.2
    })
  }
})

document.querySelectorAll('.slide-box').forEach(function (box) {
  gsap.effects.scrollSlideIn(box)
})

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '△⊆∴３________'
    this.update = this.update.bind(this)
    this.queue = []
    this.frameRequest = undefined
    this.frame = 0
  }
  setText(newText) {
    if (!this.el) {
      return
    }

    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => (this.resolve = resolve))

    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest)
    }

    this.frame = 0
    this.update()
    return promise
  }
  update() {
    if (!this.el) {
      return
    }

    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// class TextScramble {
//   constructor(el) {
//     this.el = el
//     this.chars = '△⊆∴３________'
//     this.update = this.update.bind(this)
//   }
//   setText(newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => (this.resolve = resolve))

//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ''
//       const to = newText[i] || ''
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({ from, to, start, end })
//     }

//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update() {
//     let output = ''
//     let complete = 0
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="dud">${char}</span>`
//       } else {
//         output += from
//       }
//     }
//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }

const phrases = [
  'Web developer based in Osaka',
  'sooner or later',
  "you're going to realize",
  'just as I did'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next()
