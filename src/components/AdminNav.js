import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipImage from '../assets/scholarship.png'; // Adjust the path based on your file structure
import './AdminNav.css';

const AdminNav = () => {
  return (
    <div className="admin-navbar">
      {/* Logo */}
      <img src={ScholarshipImage} alt="Admin Logo" className="admin-navbar-logo" />
      
      {/* Navigation Links */}
      <div className="admin-nav-links">
        <Link to="/viewstudent">View Students</Link> {/* View Students Button */}
      </div>
      <div className="admin-nav-links">
        <Link to="/adminauth">Admin Logout</Link> {/* Logout Button */}
      </div>
    </div>
  );
};

export default AdminNav;
