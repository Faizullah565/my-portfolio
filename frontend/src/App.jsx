import Navbar from "./components/Navbar"
import Home from "./page/Home"
import Education from "./components/Education"
import SkillsAndTools from "./page/SkillsAndTools"
import PracticalWork from "./page/PracticalWork"
import Contact from "./page/Contact"
import Footer from "./components/Footer";
// import ProjectDetails from "./components/ProjectDetails"
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <SkillsAndTools />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="practical-work">
        <PracticalWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      {/* <ProjectDetails/> */}
      <ToastContainer/>
    </>
  )
}

export default App
