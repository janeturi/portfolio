import './App.css'
import Nav from './components/nav.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Experience from './components/experience.jsx'


function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Experience />
      <section id="art" style={{ minHeight: '100vh' }} />
    </>
  )
}

export default App