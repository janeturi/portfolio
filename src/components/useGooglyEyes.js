import { useEffect } from 'react'

export default function useGooglyEyes(eyeRefs) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const eyes = eyeRefs.current.filter(Boolean).map((el) => ({
      el,
      pupil: el.querySelector('.pupil'),
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }))

    let mouse = null
    let frameId

    function onMouseMove(e) {
      mouse = { x: e.clientX, y: e.clientY }
    }

    function tick() {
      for (const eye of eyes) {
        const rect = eye.el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const maxOffset = rect.width / 2 - eye.pupil.offsetWidth / 2 - 3

        let targetX = 0
        let targetY = 0

        if (mouse) {
          const dx = mouse.x - centerX
          const dy = mouse.y - centerY
          const dist = Math.hypot(dx, dy) || 1
          const scale = Math.min(maxOffset, dist * 0.35) / dist
          targetX = dx * scale
          targetY = dy * scale
        }

        if (reduceMotion) {
          eye.x = targetX
          eye.y = targetY
        } else {
          eye.vx = (eye.vx + (targetX - eye.x) * 0.14) * 0.72
          eye.vy = (eye.vy + (targetY - eye.y) * 0.14) * 0.72
          eye.x += eye.vx
          eye.y += eye.vy
        }

        eye.pupil.style.transform = `translate(${eye.x}px, ${eye.y}px)`
      }
      frameId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    tick()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [eyeRefs])
}