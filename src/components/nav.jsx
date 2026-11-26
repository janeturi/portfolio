import '../styles/nav.css'
import { useState, useEffect } from 'react'

const links = ['home', 'about', 'projects', 'experience', 'art']

export default function Nav() {
  const [active, setActive] = useState('home')
  useEffect(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    },
    { rootMargin: '-45% 0px -54% 0px' }
  )
  document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
  return () => io.disconnect()
}, [])

  return (
    <nav>
      {links.map((name) => (
        <a key={name}
          href={`#${name}`}
          className={active === name ? 'active' : ''}
          onClick={() => setActive(name)}
        >
          {name}
        </a>
      ))}
    </nav>
  )
}