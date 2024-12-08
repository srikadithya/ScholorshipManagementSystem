import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Apply.css';
import PostLoginNavbar from './PostLoginNavbar';
import apjImage from '../assets/apj.png';
import ramImage from '../assets/ram.jpg';
import savitribaiImage from '../assets/savitribai.jpg';
import swamiImage from '../assets/swamivivekananda.jpg';

const scholarships = [
  { id: 1, name: 'Abdul Kalam Scholarship', route: '/sa', image: apjImage },
  { id: 2, name: 'ramanujan Scolarship', route: '/sb', image: ramImage },
  { id: 3, name: 'Savitribai Scholarship', route: '/sc', image: savitribaiImage },
  { id: 4, name: 'Vivekananda Scholarship', route: '/sd', image: swamiImage },
];

const Apply = () => {
  const navigate = useNavigate();

  const handleBoxClick = (scholarship) => {
    navigate(scholarship.route); // Navigate to the original route defined for the scholarship
  };

  return (
    <div>
      <PostLoginNavbar />
      <div className="apply-container">
        <h1>Available Scholarships</h1>
        <div className="scholarship-grid">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="scholarship-box"
              onClick={() => handleBoxClick(scholarship)}
            >
              <img
                src={scholarship.image}
                alt={scholarship.name}
                className="scholarship-image"
              />
              <h2 className="scholarship-name">{scholarship.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;
