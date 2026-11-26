
import { useRef } from 'react'
import '../styles/home.css'
import cat from '../assets/cat.svg'
import useGooglyEyes from './useGooglyEyes'

export default function Home() {
  const eyeRefs = useRef([])
  useGooglyEyes(eyeRefs)

  return (
    <section id="home">
      <div className="home-content">
        <div className="cat">
          <img src={cat} alt="" />
          <div className="eye eye-left" ref={(el) => (eyeRefs.current[0] = el)}>
            <div className="pupil"></div>
          </div>
          <div className="eye eye-right" ref={(el) => (eyeRefs.current[1] = el)}>
            <div className="pupil"></div>
          </div>
        </div>
        <h1>janet's diary</h1>
      </div>
    </section>
  )
}