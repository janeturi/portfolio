import { useState } from 'react'
import useReveal from './usereveal'
import '../styles/projects.css'
import Doodle from './doodle'
import doodle1 from '../assets/doodle1.svg'
import doodle2 from '../assets/doodle2.svg'
import Title from './title'

const projects = [
  { title: 'elyisum', description: '2D game exploring sustainability and eco-living from the POV of a city builder!', tools: ['unity', 'procreate', 'figma', 'C#'], repo: '' },
  { title: 'grail seeker', description: 'tool to find grail fashion items across different resale sites to find items for lower prices.', tools: ['python', 'fastAPI', 'postgreSQL', 'playwright'], repo: '' },
  { title: 'pharmacy desert map', description: 'geospatial web app rendering different pharamacies and in stock medications to visualize lack of avaliable pharmacies in rural areas of Georgia.', tools: ['javascript', 'leaflet', 'geoJSON', 'papa parse', 'vite'], repo: '' },
  { title: 'music diary', description: 'social media app made for reviewing and writing diary entries for music! create a unique profile + follow friends!', tools: ['react', 'javascript', 'vite'], repo: '' },
  { title: 'stem chatbot', description: 'ai chatbot for the STEM department @ Emory University! made for students on non-linear tracks who need guidance for their major', tools: ['python'], repo: '' },
]

function Card({ project, index }) {
    
  const [open, setOpen] = useState(false)
  const ref = useReveal()
  return (
    <div ref={ref} className="project-card reveal" style={{ '--i': index }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {open && (
        <div className="project-more">
          <p><b>tools:</b> {project.tools.join(', ')}</p>
          <a href={project.repo} target="_blank" rel="noreferrer">check back later for link!</a>
        </div>
      )}
      <button
        className={open ? 'plus open' : 'plus'}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'hide details' : 'show details'}
        aria-expanded={open}
      >
        +
      </button>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
        <Doodle src={doodle1} size={180} rotate={-10} style={{ top: '20%', right: '4%' }} />
            <Doodle src={doodle2} size={200} rotate={12} style={{ bottom: '40%', left: '3%' }} />
                <div className="projects-inner">
                    <Title>projects</Title>
                    <div className="projects-grid">
                    {projects.map((p, i) => <Card key={p.title} project={p} index={i} />)}
                    </div>
                </div>
    </section>
  )
}