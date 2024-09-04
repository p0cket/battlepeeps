// src/context/GameContext.js
import React, { createContext, useReducer } from "react"

// Initial state for the game
const initialState = {
  playerHealth: 100,
  maxHealth: 100,
  playerAttack: 20, // Added attack damage
  enemyHealth: 100,
  enemyAttack: 15,
  isVictory: false,
  upgrades: [],
}

// Reducer function to handle state changes
// src/context/GameContext.js
export const gameReducer = (state, action) => {
  switch (action.type) {
    case "ATTACK_ENEMY":
      return {
        ...state,
        enemyHealth: Math.max(0, state.enemyHealth - action.payload),
        isVictory: state.enemyHealth - action.payload <= 0,
      }
    case "ATTACK_PLAYER":
      return {
        ...state,
        playerHealth: Math.max(0, state.playerHealth - action.payload),
      }
    case "RESET_ENEMY_HEALTH":
      return {
        ...state,
        enemyHealth: 100, // Reset to default for next battle
      }
    //   case 'APPLY_UPGRADE':
    //     if (action.payload.id === 1) {
    //       // Increase max health and adjust current health accordingly
    //       const newMaxHealth = state.maxHealth + 20;
    //       return {
    //         ...state,
    //         maxHealth: newMaxHealth,
    //         playerHealth: Math.min(state.playerHealth + 20, newMaxHealth), // Ensure health doesn't exceed maxHealth
    //       };
    //     }
    // return state;
    case "APPLY_UPGRADE":
      if (action.payload.id === 1) {
        // Increase max health
        const newMaxHealth = state.maxHealth + 20
        return {
          ...state,
          maxHealth: newMaxHealth,
          playerHealth: Math.min(state.playerHealth + 20, newMaxHealth),
        }
      } else if (action.payload.id === 2) {
        // Increase attack damage
        return {
          ...state,
          playerAttack: state.playerAttack + 5,
        }
      }
      return state
    case "SET_VICTORY":
      return {
        ...state,
        isVictory: true,
      }
    case "PREPARE_BATTLE":
      return {
        ...state,
        playerHealth: state.maxHealth, // Set player health to maxHealth before battle
        isVictory: false,
      }

    default:
      return state
  }
}

// Create the context
export const GameContext = createContext()

// Create the provider component
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
