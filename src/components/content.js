import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

function Content() {
  
  return (
    <div className='content-section'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
  
};

export default Content;