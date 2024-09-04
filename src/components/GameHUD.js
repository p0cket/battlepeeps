// src/components/GameHUD.js
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import BattleInterface from './BattleInterface';

const GameHUD = () => {
  const { state } = useContext(GameContext);
  const { playerHealth, maxHealth, playerAttack } = state;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">Monster Battle</span>
          <span>Level 1</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">💚 Health:</span>
            <span>{playerHealth} / {maxHealth}</span> {/* Display health and max health */}
          </div>
          <div className="flex items-center">
            <span className="mr-2">⚔️ Attack Damage:</span>
            <span>{playerAttack}</span> {/* Display current attack damage */}
          </div>
          <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            Pause
          </button>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 bg-gray-900 p-6 flex items-center justify-center">
        <BattleInterface />
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <span className="text-sm">Use your abilities to defeat the enemy!</span>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Menu
        </button>
      </div>
    </div>
  );
};

export default GameHUD;