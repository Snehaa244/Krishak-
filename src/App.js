import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlesComponent from './Components/particles';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import Features from './Components/Features';
import AboutUs from './Components/AboutUs';
import Why from './Components/Why';
import ContactUs from './Components/ContactUs';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Routes>
        <Route path="/" element={<Why/>} />
        <Route path="/Why" element={<Why />} />
        <Route path="/Features" element={<Features  />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
