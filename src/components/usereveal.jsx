import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        el.classList.add('in')
        io.disconnect()
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}