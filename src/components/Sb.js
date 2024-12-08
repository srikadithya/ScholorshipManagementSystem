import React from 'react';
import './Sa.css';
import ApplyScholarship from './ApplyScholarship';

const Sa = () => {

  

  return (
    <div className="sa-container">
      <h1>Ramanujan Scholarship</h1>
      <div className="sa-details">
        <p>Welcome to the Ramanujan Scholarship page!</p>
        <p>
        The Ramanujan Scholarship is aimed at helping students excel in mathematics. Below are the eligibility criteria, application process, and benefits:
        </p>
        <ul>
          <li>Eligibility: Students pursuing undergraduate or postgraduate degrees in mathematics.</li>
          <li>Application Deadline: 31st December 2024.</li>
          <li>Benefits: $3000 towards tuition fees and research support.</li>
        </ul>
      </div>
      <ApplyScholarship/>      
    </div>
  );
};

export default Sa;
