
import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Exeperience/Experience';

import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Servics from './Components/Services/Servics';
import Testimonials from './Components/Testimonials/Testimonials';
import Works from './Components/Works/Works';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';

const App =()=>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <>
    <div className="App" style={{
    background : darkMode ? 'black' : '',
     color : darkMode? 'white' :''
  }}>

    </div>
    <Navbar />
    <Intro />
    <Servics />
    <Experience />
    <Works />
    <Portfolio />
    <Testimonials />
    <Contact />
   
    <Footer />
    </>
  );
}


export default App;
