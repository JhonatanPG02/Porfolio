import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/projects' element={ <Projects/>}/>
        <Route path='/contact' element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
