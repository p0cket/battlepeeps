// src/components/Instructions.js
import React from 'react';

const Instructions = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Instructions</h1>
      <p className="text-lg mb-6 text-center">
        Welcome to Monster Battle! The goal is to defeat enemies in turn-based combat and upgrade your creature.
        Click "Attack" to attack your enemy. Win battles to earn upgrades!
      </p>
      <button
        onClick={onBack}
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Back to Main
      </button>
    </div>
  );
};

export default Instructions;
