
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';


function App() {
  const [activeLink , setActive] = useState(false)
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <Header></Header>
    </div>
  );
}

export default App;
