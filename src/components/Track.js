import React, { useState } from 'react';
import './Track.css';
import PostLoginNavbar from './PostLoginNavbar';
import axios from 'axios';

const Track = () => {
  const [inputId, setInputId] = useState(''); // State to hold the input value
  const [scholarship, setScholarship] = useState(null); // State to hold the found scholarship
  const [error, setError] = useState(''); // State to hold any error messages


  const handleSearch = () => {
    axios.get("http://localhost:8080/trackapplication",{
      params:{
        id : inputId
      }
    }).then((res)=>{
      if(res.data === ''){
        alert("Enter valid Application Number")
      }
      else{
        alert(res.data.status)
        setScholarship(res.data)
      }
    })
  };

  return (
    <div>
      <PostLoginNavbar/>
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
          <h2>Scholarship: {scholarship.type}</h2>
          <p><strong>Status:</strong> {scholarship.status === false 
    ? "Rejected" 
    : scholarship.status === null 
      ? "Pending" 
      : "Approved"}</p>
        </div>
      )}

      {/* Show error if scholarship not found */}
      {error && <div className="error-message">{error}</div>}
    </div>
    </div>
  );
};

export default Track;
