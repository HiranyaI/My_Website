import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import particles from "./utils.js/particles"
import ParticlesComponent from './utils.js/particles';


function App() {
  const location = useLocation();
  console.log(location);

  const renderparticleJsInHomePage = location.pathname ==="/";

  return (
    <div className="App">
      {/*particles.js*/}
      {
        renderparticleJsInHomePage && 
        <ParticlesComponent id="particles" options={particles}/>
      }

      {/*navbar*/}
      <Navbar/>

      {/*main page content*/}
      <div className='App_mainpagecontent'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
