import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import whatis from '../assets/international-day.jpg';
import howtoapply from '../assets/scholarship-application-form-foundation-concept.jpg';
import benifit from '../assets/success-stories-1.png';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <div className="top-row">
          {/* Box for "What is a Scholarship?" */}
          <div className="box">
            <div className="box-content">
              <div className="image-container">
                <img src={whatis} alt="What is a Scholarship?" className="box-image" />
              </div>
              <div className="text-container">
                <h3>What is a Scholarship?</h3>
                <p>Learn about scholarships, how they work, and how you can qualify for them.</p>
                <Link to="/whatis" className="box-button">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Box for "How to Apply?" */}
          <div className="box">
            <div className="box-content">
              <div className="image-container">
                <img src={howtoapply} alt="How to Apply" className="box-image" />
              </div>
              <div className="text-container">
                <h3>How to Apply for Scholarships</h3>
                <p>Get detailed instructions on how to apply for various scholarships.</p>
                <Link to="/HowToApply" className="box-button">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-row">
          {/* Box for "Success Stories" */}
          <div className="box">
            <div className="box-content">
              <div className="image-container">
                <img src={benifit} alt="Success Stories" className="box-image" />
              </div>
              <div className="text-container">
                <h3>Success Stories</h3>
                <p>Read inspiring stories of people who successfully obtained scholarships.</p>
                <Link to="/success" className="box-button">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
