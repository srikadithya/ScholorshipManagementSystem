// Apply.js
import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scholarship: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Application Submitted');
  };

  return (
    <div className="apply-container">
      <h1>Apply for Scholarship</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Scholarship:
          <select name="scholarship" value={formData.scholarship} onChange={handleChange} required>
            <option value="">Select a Scholarship</option>
            <option value="Scholarship A">Scholarship A</option>
            <option value="Scholarship B">Scholarship B</option>
          </select>
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Apply;
