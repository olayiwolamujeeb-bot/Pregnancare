import React from 'react';
import { motion } from 'framer-motion';

const WelcomeModal = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      {showWelcome && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-6 z-50"
        >
          <h2 className="text-2xl font-bold mb-2">Welcome, Dear User!</h2>
          <p className="mb-4">Track your beautiful journey to motherhood.</p>
          <button onClick={() => setShowWelcome(false)} className="bg-purple-600 text-white px-4 py-2 rounded-lg">Close</button>
        </motion.div>
      )}
    </>
  );
};

export default WelcomeModal;
