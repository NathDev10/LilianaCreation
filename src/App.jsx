import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Creations from './pages/Creations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-creations" element={<Creations />} />
      </Routes>
    </BrowserRouter>
  );
}
