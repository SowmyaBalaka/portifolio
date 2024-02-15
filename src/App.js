import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from './components/Contact/contact';
import Fotter from './components/Footer/fotter';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Fotter/>
    </div>
  );
}

export default App;
