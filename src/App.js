import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Work from './components/work/Work'
import Contact from './components/contact/Contact'


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Qualification />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
