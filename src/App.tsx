import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { GameScene } from './scenes/GameScene'
import { GAME_CONFIG } from './config/gameConfig'
import './App.css'

function App() {
  const gameRef = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        ...GAME_CONFIG,
        scene: [GameScene],
      }
      gameRef.current = new Phaser.Game(config)
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true)
        gameRef.current = null
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center">
      <div id="game-container" className="border-2 border-cyber-blue p-4 flex flex-col items-center">
        <h1 className="text-cyber-blue text-2xl mb-4">Hacker's Gambit</h1>
        {/* Phaser game will be mounted here */}
      </div>
    </div>
  )
}

export default App
