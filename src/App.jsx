import Main from "./components/Main";
import Work from "./components/Work";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Main />
      <Work />
      <Activities />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
