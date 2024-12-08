import React, { useState } from 'react';
import './Track.css';
import PostLoginNavbar from './PostLoginNavbar';
import axios from 'axios';
import gifImage from '../assets/gifImage.gif'; // Import the GIF file

const Track = () => {
  const [inputId, setInputId] = useState('');
  const [scholarship, setScholarship] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    axios
      .get('http://localhost:8080/trackapplication', {
        params: { id: inputId },
      })
      .then((res) => {
        if (!res.data) {
          setError('Enter a valid Application Number');
        } else {
          setScholarship(res.data);
        }
      })
      .catch((err) => {
        setError('Failed to fetch scholarship details. Please try again.');
        console.error(err);
      });
  };

  return (
    <div>
      <PostLoginNavbar />
      <div className="track-container">
        <h1>Track Your Scholarship</h1>
        <input
          type="number"
          placeholder="Enter Scholarship ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="track-input"
        />
        <button onClick={handleSearch} className="track-btn">
          Search
        </button>

        {scholarship && (
          <div className="scholarship-details">
            <h2>Scholarship: {scholarship.type}</h2>
            <p>
              <strong>Status:</strong>{' '}
              {scholarship.status === false
                ? 'Rejected'
                : scholarship.status === null
                ? 'Pending'
                : 'Approved'}
            </p>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        {/* Display the GIF */}
        <img src={gifImage} alt="Loading..." className="track-gif" />
      </div>
    </div>
  );
};

export default Track;
