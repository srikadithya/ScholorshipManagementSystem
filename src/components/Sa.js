import React from 'react';
import './Sa.css';
import ApplyScholarship from './ApplyScholarship';

const Sa = () => {

  

  return (
    <div className="sa-container">
    <h1>APJ Abdul Kalam Scholarship</h1>
    <div className="sa-details">
      <p>Welcome to the APJ Abdul Kalam Scholarship page!</p>
      <p>
        The APJ Abdul Kalam Scholarship is aimed at inspiring young minds to pursue careers in science and technology. Below are the eligibility criteria, application process, and benefits:
      </p>
      <ul>
        <li>Eligibility: Students pursuing undergraduate or postgraduate degrees in science, technology, engineering, or mathematics (STEM).</li>
        <li>Application Deadline: 31st December 2024.</li>
        <li>Benefits: $5000 towards tuition fees and research support.</li>
      </ul>
    </div>
    <ApplyScholarship/>
  </div>
    );
};

export default Sa;
