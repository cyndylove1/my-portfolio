import React from "react";
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from 'react-router-dom'
import "aos/dist/aos.css"
import Aos from "aos"


function App() {
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing: 'ease-in-sine',
      delay:100

    });
    Aos.refresh();

  }, []);
  return (
    <div>
      
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
        
    
          

        <Routes>
            <Route path='/Hero' element={<Hero/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Skill' element={<Skill/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            
          </Routes>  
      
    </div>
    
  );
}

export default App;
