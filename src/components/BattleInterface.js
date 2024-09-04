// src/components/BattleInterface.js
import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import PlayerCreature from "./PlayerCreature"
import Enemy from "./Enemy"
import VictoryScreen from "./VictoryScreen"

const BattleInterface = () => {
  const { state, dispatch } = useContext(GameContext)
  const { playerHealth, playerAttack, enemyHealth, isVictory, enemyAttack } = state
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false)
  const [isEnemyAttacking, setIsEnemyAttacking] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    dispatch({ type: "PREPARE_BATTLE" }) // Prepare battle by setting player health to maxHealth
  }, [dispatch])

  const handleAttack = () => {
    if (isAnimating || isVictory) return // Prevent multiple attacks or attacking after victory
    setIsAnimating(true)
    setIsPlayerAttacking(true)

    // Player attacks enemy
    setTimeout(() => {
      dispatch({ type: "ATTACK_ENEMY", payload: playerAttack })
      setIsPlayerAttacking(false)

      // If enemy is not defeated, it attacks back
      if (!state.isVictory) {
        setIsEnemyAttacking(true)
        setTimeout(() => {
          dispatch({ type: "ATTACK_PLAYER", payload: enemyAttack })
          setIsEnemyAttacking(false)
          setIsAnimating(false)
        }, 500) // Enemy attack delay
      } else {
        setIsAnimating(false)
      }
    }, 500) // Player attack delay
  }

  const handleUpgradeSelect = (upgrade) => {
    dispatch({ type: "APPLY_UPGRADE", payload: upgrade })
    dispatch({ type: "RESET_ENEMY_HEALTH" })
    dispatch({ type: "PREPARE_BATTLE" }) // Prepare for the next battle after upgrading
  }

  useEffect(() => {
    if (enemyHealth <= 0) {
      dispatch({ type: "SET_VICTORY" })
    }
  }, [enemyHealth, dispatch])

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      {isVictory ? (
        <VictoryScreen onUpgradeSelect={handleUpgradeSelect} />
      ) : (
        <>
          <Enemy health={enemyHealth} isAttacking={isEnemyAttacking} />
          <PlayerCreature
            health={playerHealth}
            onAttack={handleAttack}
            isAttacking={isPlayerAttacking}
          />
        </>
      )}
    </div>
  )
}

export default BattleInterface
