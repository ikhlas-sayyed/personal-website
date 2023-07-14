import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Policy from './components/Policy';
import PageNotFound from './PageNotFound';
import Service from './components/Services';

// import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      {/* start */}
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* PLOICYS  */}
          <Route path='/policy/:policyname' element={<Policy/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/service/:servicename' element={<Service/>}/>
        </Routes>
        {/* //end */}
      <Footer />
    </Router>
    </>
  );
}

export default App;
