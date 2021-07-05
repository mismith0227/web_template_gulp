import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { Buttons } from './buttons'
import { Wave } from './wave'
import { ThreeSample } from './ThreeSample'

Buttons()

const container = document.getElementById('canvas-container')
if (container) {
  ThreeSample()
}

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
    console.log(config)
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
