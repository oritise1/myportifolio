import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/ServicesRender';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Testimony from './components/Testimony';
import MileStone from './components/MileStones';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Services />
      <MileStone />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
