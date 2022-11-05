import './App.css';
// import './app1.css';
import Navbar from './Navbar';
// import { Routes, Route } from "react-router-dom"
import Textarea from './Textarea';
import React,{useState} from 'react';
import About from './About';

function App() {
  const [mode, setmode] = useState("white");
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  
  const ontoggle = () => {
    if (mode === "dark") {
      setmode("white");
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setmode("dark");
      setmystyle({
        color: "white",
        backgroundColor: "blue",
      });
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} ontoggle={ontoggle} />
      <Textarea mystyle={mystyle}/>
      <About mystyle={mystyle}/> 
      {/* <Textarea/> */}
      {/* <Routes> */}
        {/* <Route path="/Textarea" element={ <Textarea mystyle={mystyle}/> } /> */}
        {/* <Route path="/about" element={ <About mystyle={mystyle}/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } /> */}
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
