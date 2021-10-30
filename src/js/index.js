import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
// import { Buttons } from './buttons'
// import { Wave } from './wave'
// import { ThreeSample } from './threeSample'
// import { ScrollEffect } from './scrolleffect'

gsap.registerPlugin(ScrollTrigger)

// メインのテキストアニメーション
gsap.registerEffect({
  name: 'textAnimation',
  defaults: { duration: 2 },
  effect: (targets, config) => {
    return gsap
      .timeline()
      .from(
        targets,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: '0% 50% -50',
          ease: 'back',
          stagger: 0.01,
          delay: config.delay / 25
        },
        '+=0'
      )
      .to('.sub-title', { opacity: 1, y: 0, duration: 1, delay: 0.1 })
  }
})

document.querySelectorAll('.word').forEach(function (box, index) {
  gsap.effects.textAnimation(box, { delay: index })
})

// スライドインとテキストのフェードイン
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.slide-in'
    }
  })
  .to('.slide-in .left', { x: 0, duration: 0.5 })
  .to('.slide-in .right', { x: 0, duration: 0.5 })
  .to('.slide-in p', { y: 0, opacity: 1, duration: 1 })

// 画像固定

gsap.to('.fixed-image .image', {
  duration: 0.5,
  scale: 0.4,
  transformOrigin: 'top left',
  ease: 'none',
  scrollTrigger: {
    trigger: '.fixed-image',
    start: 'top top',
    end: 'top -100%',
    scrub: true
  }
})

// 水平スクロール

const pinedList = document.querySelector('.pined-list')
const pinedInner = document.querySelector('.pined-inner')

gsap.to(pinedList, {
  x: -pinedList.clientWidth + pinedInner.clientWidth,
  scrollTrigger: {
    trigger: '.pined',
    start: 'top top',
    end: `+=${pinedList.clientWidth}`,
    pin: true,
    scrub: 1,
    markers: true
  }
})
