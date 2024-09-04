// src/components/MainScreen.js
import React from "react"

const MainScreen = ({ onStart, onInstructions, onSettings }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">
        🐉 Monster Battle 🛡️
      </h1>
      <p className="text-lg mb-6 text-center">
        A turn-based RPG adventure where you fight monsters and upgrade your
        creature to become the ultimate champion!
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Start Game
      </button>
      <div className="flex mt-6 space-x-4">
        <button
          onClick={onInstructions}
          className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300"
        >
          Instructions
        </button>
        <button
          onClick={onSettings}
          className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300"
        >
          Settings
        </button>
      </div>
    </div>
  )
}

export default MainScreen
