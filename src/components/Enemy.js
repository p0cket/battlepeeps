// src/components/Enemy.js
import React from 'react';
import { motion } from 'framer-motion';

const Enemy = ({ health, isAttacking }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ y: 0 }}
        animate={isAttacking ? { x: [0, -20, 20, 0] } : { y: [5, -5, 5] }}
        transition={{ duration: isAttacking ? 0.5 : 1, repeat: isAttacking ? 0 : Infinity }}
        className="text-6xl"
      >
        👹
      </motion.div>
      <motion.div
        className="w-32 bg-gray-700 rounded-full h-4 mt-2"
        initial={{ width: '100%' }}
        animate={{ width: `${health}%` }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full bg-red-500 rounded-full"></div>
      </motion.div>
      <p className="text-white mt-2">Health: {health}</p>
    </div>
  );
};

export default Enemy;
