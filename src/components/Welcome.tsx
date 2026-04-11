import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Our Page!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Join us in exploring the topics of feminism and empowerment.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Welcome;