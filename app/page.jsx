import Main from '../src/components/Main'
import Work from '../src/components/Work'
import Activities from '../src/components/Activities'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import Education from '../src/components/Education'
import Certifications from '../src/components/Certifications'
import Contact from '../src/components/Contact'

export default function Home() {
  return (
    <div>
      <Main />
      <Work />
      <Activities />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  )
}
