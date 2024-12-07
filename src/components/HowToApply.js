import React from 'react';
import { motion } from 'framer-motion';
import './HowToApply.css';

const HowToApply = () => {
  return (
    <motion.div 
      className="how-to-apply"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2>How to Apply for Scholarships</h2>
      <div className="steps">
        <motion.div 
          className="step"
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          <h3>Step 1: Research Scholarships</h3>
          <p>
            Look for scholarships that align with your profile and academic interests. You can find them through universities, private organizations, or government websites.
          </p>
        </motion.div>
        <motion.div 
          className="step"
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          <h3>Step 2: Submit Your Application</h3>
          <p>
            Submit all the necessary documents, including transcripts, essays, and any other requested materials.
          </p>
        </motion.div>
        <motion.div 
          className="step"
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          <h3>Step 3: Follow Up</h3>
          <p>
            After applying, stay updated on the application status and make sure you submit any additional documents if required.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowToApply;
