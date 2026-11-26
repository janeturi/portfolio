import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      ref.current.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%'
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return <div ref={ref} className="scroll-progress" />
}