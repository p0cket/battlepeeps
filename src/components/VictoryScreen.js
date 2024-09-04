// src/components/VictoryScreen.js
import React, { useState } from 'react';

const VictoryScreen = ({ onUpgradeSelect }) => {
  const upgrades = [
    { id: 1, name: 'Increase Health', description: 'Gain +20 Max Health' },
    { id: 2, name: 'Increase Attack', description: 'Gain +5 Attack Power' },
    { id: 3, name: 'New Ability', description: 'Learn a new ability' },
  ];

  const [selectedUpgrade, setSelectedUpgrade] = useState(null);

  const handleUpgradeClick = (upgrade) => {
    setSelectedUpgrade(upgrade);
  };

  const handleConfirm = () => {
    if (selectedUpgrade) {
      onUpgradeSelect(selectedUpgrade); // Trigger the upgrade and transition to the next battle
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Victory!</h2>
      <p className="mb-4">Choose your upgrade:</p>
      <div className="flex flex-col items-start">
        {upgrades.map((upgrade) => (
          <button
            key={upgrade.id}
            onClick={() => handleUpgradeClick(upgrade)}
            className={`mt-2 px-4 py-2 rounded ${selectedUpgrade?.id === upgrade.id ? 'bg-green-500' : 'bg-gray-700'} hover:bg-green-600`}
          >
            {upgrade.name}: {upgrade.description}
          </button>
        ))}
      </div>
      <button
        onClick={handleConfirm}
        disabled={!selectedUpgrade}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Confirm Upgrade
      </button>
    </div>
  );
};

export default VictoryScreen;