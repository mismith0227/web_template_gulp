import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export const ScrollEffect = () => {
  gsap.registerPlugin(ScrollTrigger)

  // gsap.to('.first-digit-num', {
  //   y: -100,
  //   scrollTrigger: {
  //     trigger: '.first-digit-num',
  //     start: 'top center',
  //     end: 'top 100px',
  //     scrub: true,
  //     markers: true
  //   }
  // })

  gsap.registerEffect({
    name: 'textSlide',
    defaults: { duration: 2 },
    effect: (targets, config) => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: `.section${config.index + 1}`,
            start: 'bottom 120%',
            end: 'bottom 20%',
            markers: true,
            scrub: true
          }
        })
        .from(targets, { y: 100, duration: 2 })
        .to(targets, { y: 0, duration: 2 })
        .to(targets, { duration: 3 })
        .to(targets, { y: -100, duration: 2 })
    }
  })

  document.querySelectorAll('.number').forEach(function (box, index) {
    gsap.effects.textSlide(box, { index })
  })

  // gsap.effects.textSlide('.number1')

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.section1',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })

  // tl.from('.number1', { yPercent: 200, duration: 2 })
  //   .to('.number1', { yPercent: 0, duration: 2 })
  //   .to('.number1', { duration: 3 })
  //   .to('.number1', { yPercent: -200, duration: 2 })

  // gsap.to('.number1', {
  //   y: '-100vh',
  //   scrollTrigger: {
  //     trigger: '.section1',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })

  // gsap.to('.number2', {
  //   y: '-100vh',
  //   scrollTrigger: {
  //     trigger: '.section2',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })

  // gsap.to('.number3', {
  //   y: '-100vh',
  //   scrollTrigger: {
  //     trigger: '.section3',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })

  // gsap.to('.number4', {
  //   y: '-100vh',
  //   scrollTrigger: {
  //     trigger: '.section4',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })

  // gsap.to('.number5', {
  //   y: '-100vh',
  //   scrollTrigger: {
  //     trigger: '.section5',
  //     start: 'bottom 100%',
  //     end: 'bottom 0',
  //     markers: true,
  //     scrub: true
  //   }
  // })
}
