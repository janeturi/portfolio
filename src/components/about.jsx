import { useState } from 'react'
import { FiCoffee, FiFileText, FiGithub, FiLinkedin, FiMail, FiArrowLeft } from 'react-icons/fi'
import '../styles/about.css'
import stickyNotes from '../assets/sticky_notes.svg'
import useReveal from './usereveal'
import Doodle from './doodle'
import doodle3 from '../assets/doodle3.svg'
import doodle5 from '../assets/doodle5.svg'


const skills = {
  languages: ['python', 'javascript', 'java', 'typescript', 'html + css', 'c', 'c#', 'sql'],
  frameworks: ['react', 'vite', 'express.js', 'node.js', 'react', 'springboot', 'react native', 'pytorch'],
  tools: ['scikit-learn', 'matplotlib', 'numpy + pandas', 'git', 'vite', 'google cloud', 'supabase'],
}

const links = [
  [FiGithub, 'github', 'https://github.com/janeturi'],
  [FiLinkedin, 'linkedin', 'https://linkedin.com/in/janet-uriostegui'],
  [FiMail, 'email', 'mailto:juriosteguiescobar@gmail.com'],
]

export default function About() {
  const [view, setView] = useState('about')
  const ref = useReveal()

  return (
    <section id="about">
      <Doodle src={doodle3} size={180} rotate={-10} style={{ top: '10%', right: '6%' }} />
        <Doodle src={doodle5} size={200} rotate={12} style={{ bottom: '8%', left: '3%' }} />
        <div ref={ref} className="about-card reveal">
          <img className="sticky-bg" src={stickyNotes} alt="" />
          <div className="about-text">
            {view !== 'about' && (
              <button className="back" onClick={() => setView('about')}>
                <FiArrowLeft /> back
              </button>
            )}

            {view === 'about' && (
              <>
                <h2>hi, i'm <span>janet</span>!</h2>
                <p>
                  i'm a third year comp sci + ai student interested in full stack
                  development. i have a passion for bridging tech w other stuff-
                  particularly, art and health!
                </p>
                <div className="icons">
                  <button onClick={() => setView('connect')}><FiCoffee />connect</button>
                  <button onClick={() => setView('skills')}><FiFileText />skills</button>
                </div>
              </>
            )}

            {view === 'skills' && (
              <>
                <h2>skills</h2>
                <div className="skills">
                  {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                      <h3>{group}</h3>
                      <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {view === 'connect' && (
              <>
                <h2>let's chat!</h2>
                <ul className="links">
                  {links.map(([Icon, label, href]) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noreferrer"><Icon />{label}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
  )
}