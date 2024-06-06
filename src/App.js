import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './Home'
import Contacto from './Contacto'
import Cuidados from './Cuidados'
import Captions from './Captions'
import Arboles from './Arboles'
import './App.css';

function App() {
  return (
    <>     
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arboles" element={<Arboles />} /> 
        <Route path="/captions" element={<Captions />} />
        <Route path="/cuidados" element={<Cuidados />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
