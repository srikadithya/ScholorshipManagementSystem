import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Search from './components/Search';
import Apply from './components/Apply';
import Track from './components/Track';
import HomePage from './components/HomePage';
import PostLoginNavbar from './components/PostLoginNavbar';
import WhatIs from './components/Whatis';
import HowToApply from './components/HowToApply';
import Success from './components/Success'
import AdiminAuth from './components/AdminAuth';
import ViewStudent from './components/ViewStudent';
import AdminNav from './components/AdminNav'
// Import new components for Sa, Sb, Sc, Sd, Se
import Sa from './components/Sa';
import Sb from './components/Sb';
import Sc from './components/Sc';
import Sd from './components/Sd';
import Se from './components/Se';
function App() {
  return (
    <>
      <Routes>
        <Route path="/postloginnavbar" element={<PostLoginNavbar />} /> {/* PostLoginNavbar Route */}
        <Route path="/navbar" element={<Navbar />} /> {/* Navbar Route */}
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/howtoapply" element={<HowToApply />} /> {/* Navbar Route */}
        <Route path="/adminauth" element={<AdiminAuth />} /> {/* Navbar Route */}
        <Route path="/viewstudent" element={<ViewStudent />} /> {/* Navbar Route */}
        <Route path="/adminnav" element={<AdminNav />} /> {/* Navbar Route */}
        <Route path="/success" element={<Success />} /> {/* Navbar Route */}
        <Route path="/authpage" element={<AuthPage />} /> {/* AuthPage Route */}
        <Route path="/apply" element={<Apply />} />  {/* Apply Route */}
        <Route path="/search" element={<Search />} /> {/* Search Route */}
        <Route path="/track" element={<Track />} /> {/* Track Route */}
        <Route path="/whatis" element={<WhatIs />} />
        {/* Add new routes for Sa, Sb, Sc, Sd, Se */}
        <Route path="/sa" element={<Sa />} />
        <Route path="/sb" element={<Sb />} />
        <Route path="/sc" element={<Sc />} />
        <Route path="/sd" element={<Sd />} />
        <Route path="/se" element={<Se />} />
      </Routes>
    </>
  );
}

export default App;
