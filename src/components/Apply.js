import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Apply.css';
import PostLoginNavbar from './PostLoginNavbar';

const scholarships = [
  { id: 1, name: 'Scholarship A', route: '/sa' },
  { id: 2, name: 'Scholarship B', route: '/sb' },
  { id: 3, name: 'Scholarship C', route: '/sc' },
  { id: 4, name: 'Scholarship D', route: '/sd' },
  { id: 5, name: 'Scholarship E', route: '/se' },
];

const Apply = () => {
  const navigate = useNavigate();

  const handleBoxClick = (scholarship) => {
    navigate(scholarship.route); // Navigate to the route defined for the scholarship
  };

  return (
    <div>
      <PostLoginNavbar/>
      <div className="apply-container">
      <h1>Available Scholarships</h1>
      <div className="scholarship-grid">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="scholarship-box"
            onClick={() => handleBoxClick(scholarship)}
          >
            <h2>{scholarship.name}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Apply;
