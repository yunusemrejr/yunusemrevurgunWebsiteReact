import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from "./pages/HomePage"; 
import AboutMe from "./pages/AboutMe"; 
 import Gallery from "./pages/Gallery"; 
import More from "./pages/More"; 
import ChatRoom from "./pages/ChatRoom"; 

const App = () => { 
  return ( 
    <Router> 
      <div> 
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutMe />} /> 
           <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/more" element={<More />} /> 
          <Route path="/chat" element={<ChatRoom />} /> 
        </Routes> 
      </div> 
    </Router> 
  ) 
}

export default App;
