import React from 'react';
import './Sa.css';
import ApplyScholarship from './ApplyScholarship';

const Sa = () => {

  

  return (
    <div className="sa-container">
      <h1>Scholarship A</h1>
      <div className="sa-details">
        <p>Welcome to the Scholarship A page!</p>
        <p>
          Scholarship A is designed to help students achieve their academic goals. Check out the eligibility criteria, application process, and benefits below:
        </p>
        <ul>
          <li>Eligibility: Students pursuing undergraduate degrees.</li>
          <li>Application Deadline: 31st December 2024.</li>
          <li>Benefits: $5000 towards tuition fees.</li>
        </ul>
      </div>
      <ApplyScholarship/>      
    </div>
  );
};

export default Sa;
