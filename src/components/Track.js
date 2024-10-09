import React, { useState } from 'react';
import './Track.css';

const Track = () => {
  const [inputId, setInputId] = useState(''); // State to hold the input value
  const [scholarship, setScholarship] = useState(null); // State to hold the found scholarship
  const [error, setError] = useState(''); // State to hold any error messages

  const data = [
    { id: 1, name: "Scholarship A", status: "Pending", details: "Application under review." },
    { id: 2, name: "Scholarship B", status: "Approved", details: "Your scholarship has been approved." },
  ];

  const handleSearch = () => {
    const foundScholarship = data.find((item) => item.id === parseInt(inputId, 10));

    if (foundScholarship) {
      setScholarship(foundScholarship);
      setError(''); // Clear any previous error
    } else {
      setScholarship(null);
      setError('Scholarship not found'); // Show an error if not found
    }
  };

  return (
    <div className="track-container">
      <h1>Track Your Scholarship</h1>

      {/* Input field for entering the scholarship ID */}
      <input
        type="number"
        placeholder="Enter Scholarship ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)} // Update state with input value
        className="track-input"
      />
      <button onClick={handleSearch} className="track-btn">Search</button>

      {/* Display scholarship details if found */}
      {scholarship && (
        <div className="scholarship-details">
          <h2>Scholarship: {scholarship.name}</h2>
          <p><strong>Status:</strong> {scholarship.status}</p>
          <p><strong>Details:</strong> {scholarship.details}</p>
        </div>
      )}

      {/* Show error if scholarship not found */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Track;
