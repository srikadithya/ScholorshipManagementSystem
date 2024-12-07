import React from 'react';
import { motion } from 'framer-motion';
import './Whatis.css';

const Whatis = () => {
  return (
    <motion.div 
      className="whatis"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2>What is a Scholarship?</h2>
      <p>
        A scholarship is a financial award given to a student to help pay for their education. Scholarships are typically based on academic merit, financial need, or a combination of both.
      </p>
    </motion.div>
  );
};

export default Whatis;
