import React from 'react';
import './Sa.css';
import ApplyScholarship from './ApplyScholarship';

const Sa = () => {

  

  return (
    <div className="sa-container">
      <h1>Savitribai Phule Scholarship</h1>
      <div className="sa-details">
      <p>Welcome to the Swami Vivekananda Scholarship page!</p>
      
        <ul>
          <li>Eligibility: Students pursuing a degree in engineering, medical, or humanities.</li>
          <li>Application Deadline: 31st December 2024.</li>
          <li>Benefits: $4000 towards tuition fees and academic resources.</li>
        </ul>
      </div>
      <ApplyScholarship/>      
    </div>
  );
};

export default Sa;
