// src/App.js
import React, { useState } from 'react';
import { GameProvider } from './context/GameContext';
import MainScreen from './components/MainScreen';
import GameHUD from './components/GameHUD';
import Instructions from './components/Instructions';

function App() {
  const [screen, setScreen] = useState('main'); // 'main', 'game', 'instructions', 'settings'

  const handleStartGame = () => setScreen('game');
  const handleShowInstructions = () => setScreen('instructions');
  const handleShowSettings = () => setScreen('settings');  
  const handleBackToMain = () => setScreen('main');

  return (
    <GameProvider>
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
        {screen === 'main' && (
          <MainScreen 
            onStart={handleStartGame} 
            onInstructions={handleShowInstructions} 
            onSettings={handleShowSettings}
          />
        )}
        {screen === 'game' && <GameHUD />} {/* Use GameHUD here */}
        {screen === 'instructions' && <Instructions onBack={handleBackToMain} />}
        {/* {screen === 'settings' && <Settings onBack={handleBackToMain} />} */}
      </div>
    </GameProvider>
  );
}

export default App;
