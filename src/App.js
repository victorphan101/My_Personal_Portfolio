import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
//import {Routes, Route } from 'react-router-dom';
//import TVSA from "./pages/work/TVSA.jsx";

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


/**
 * <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tvsa' element={<TVSA />} />
        </Routes>
 */