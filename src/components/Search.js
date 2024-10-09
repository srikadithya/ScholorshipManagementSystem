import React, { useState } from 'react';
import './Search.css';  // Make sure you have styles

const Search = () => {
  const scholarships = [
    { id: 1, name: 'Scholarship A', status: 'Available' },
    { id: 2, name: 'Scholarship B', status: 'Closed' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(scholarships);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredResults(
      scholarships.filter((scholarship) => 
        scholarship.name.toLowerCase().includes(value))
    );
  };

  return (
    <div className="search-container">
      <h1>Search Scholarships</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="search-results">
        {filteredResults.map((scholarship) => (
          <li key={scholarship.id}>
            {scholarship.name} - {scholarship.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
