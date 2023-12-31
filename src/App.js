
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Contact } from './components/Contact';


function App() {
  const [activeLink , setActive] = useState(false)
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
