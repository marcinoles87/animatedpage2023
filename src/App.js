
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  const [activeLink , setActive] = useState(false)
  return (
    <div className="App">
      
      <NavBar></NavBar>
    </div>
  );
}

export default App;
