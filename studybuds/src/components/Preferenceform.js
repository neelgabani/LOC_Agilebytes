// src/components/PreferenceForm.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Preferenceform.css'; // Import the CSS file for styling

const Preferenceform = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [country, setCountry] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleSubjectChange = (e) => {
    const selectedSubjects = Array.from(e.target.selectedOptions, (option) => option.value);
    setSubjects(selectedSubjects);
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          college,
          country,
          subjects,
        }),
      });
      if (response.ok) {
        console.log('Preferences saved successfully');
        // Reset form
        setName('');
        setCollege('');
        setCountry('');
        setSubjects([]);
      } else {
        console.error('Failed to save preferences');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="container"> {/* Add a class to style the container */}
      <h2>Input Your Study Preferences</h2>
      <form onSubmit={handleSubmit} className="form"> {/* Add a class to style the form */}
        <div className="form-group"> {/* Add a class to style the form group */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <select
            id="college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          >
            <option value="">Select College</option>
            <option value="Dwarkadas J Sanghvi college of engineering">Dwarkadas J Sanghvi College of Engineering</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subjects">Subject Preferences:</label>
          <select
            id="subjects"
            multiple
            value={subjects}
            onChange={handleSubjectChange}
            required
          >
            <option value="Machine learning">Machine Learning</option>
            <option value="Web/App">Web/App</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
            <option value="Management">Management</option>
            {/* Add more subjects as needed */}
          </select>
        </div>
        <button type="submit" className="submit-btn" onClick={()=>{navigate("/")}}>Submit</button> {/* Add a class to style the submit button */}
      </form>
    </div>
  );
};

export default Preferenceform;
