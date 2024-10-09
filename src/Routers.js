import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import   
 Apply from './components/Apply';
import Monitor from './components/Monitor'; // Assuming these components exist
import Authenticate from './components/Authenticate'; // Assuming these components exist
import Navbar from './components/navbar';

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/apply" element={<Apply />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/authenticate" element={<Authenticate />} />
        {/* Add a default route if needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;