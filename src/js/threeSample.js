import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  PointLight,
  BoxGeometry,
  MeshLambertMaterial,
  Mesh
} from 'three'
import { gsap } from 'gsap'

export const ThreeSample = () => {
  const scene = new Scene()

  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  const container = document.getElementById('canvas-container')
  container.appendChild(renderer.domElement)

  const camera = new PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    10
  )
  camera.position.z = 5

  // ライトを作成
  const light = new PointLight(0x00ffff)
  light.position.set(2, 2, 2)

  // ライトをシーンに追加
  scene.add(light)

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshLambertMaterial({ color: 0xffffff })

  const cube = new Mesh(geometry, material)
  scene.add(cube)

  gsap.to(cube.rotation, {
    duration: 10,
    x: Math.PI * 2,
    y: Math.PI * 2,
    repeat: -1,
    ease: 'none'
  })
  gsap.to(cube.scale, { duration: 1.5, x: 1.5, y: 1.5, z: 1.5 })

  const animate = function () {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
  }

  animate()
}
