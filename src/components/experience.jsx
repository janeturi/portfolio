import useReveal from './usereveal'
import '../styles/projects.css'
import '../styles/experience.css'
import Title from './title'
import Doodle from './doodle'
import doodle4 from '../assets/doodle3.svg'
import doodle6 from '../assets/doodle6.svg'


const jobs = [
  { role: 'software engineer', org: 'Nell Hodsgon Woodruff School of Nursing', dates: '2026 – present', description: 'worked alongside a team of researchers and data engineers for the CanBeWell app', details: ['led development for CanBeWells clinician-facing dashboard, implementing multiple features to improve communication between clinicians and patients', 'tools: react, typescript, vite'] },
  { role: 'web developer', org: 'Nell Hodsgon Woodruff School of Nursing', dates: '2024 – 2025', 
    description: 'created internal web applications and automated administrative workflows using javascript', details: ['tools: python, javascript, sharepoint'] },
]

function Job({ job, index }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="project-card reveal" style={{ '--i': index }}>
      <h3>{job.role}</h3>
      <b>{job.org}</b>
      <p>{job.dates}</p>
      <br></br>
      <p>{job.description}</p>
        <ul className="project-more">
          {job.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
        <Doodle src={doodle4} size={180} rotate={-10} style={{ top: '50%', right: '6%' }} />
        <Doodle src={doodle6} size={200} rotate={12} style={{ bottom: '15%', left: '3%' }} />
        <div className="projects-inner">
            <Title >experience</Title>
            <div className="projects-grid experience-grid">
            {jobs.map((j, i) => <Job key={i} job={j} index={i} />)}
            </div>
        </div>
    </section>
  )
}