// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Search from './components/Search';
import Apply from './components/Apply'; 
import Track from './components/Track';
//import ScholarshipImage from './assets/scholarship.png'; // Correct import path for the image

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apply" element={<Apply />} />  {/* Apply Route */}
        <Route path="/search" element={<Search />} /> {/* Search Route */}
        <Route path="/track" element={<Track />} /> {/* Track Route */}
      </Routes>
    </>
  );
}

export default App;
