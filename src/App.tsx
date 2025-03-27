import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { GameScene } from './scenes/GameScene'
import { GAME_CONFIG } from './config/gameConfig'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { endTurn } from './store/gameState'
import './App.css'

function GameContainer() {
  const gameRef = useRef<Phaser.Game | null>(null)
  const dispatch = useDispatch()
  const { currentTurn, turnCount } = useSelector((state: RootState) => state.gameState)

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

  const handleEndTurn = () => {
    dispatch(endTurn())
    // Automatically end AI turn after a short delay
    if (currentTurn === 1) {
      setTimeout(() => {
        dispatch(endTurn())
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center">
      <div className="relative flex">
        <div id="game-container" className="border-2 border-cyber-blue p-4 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <h1 className="text-cyber-blue text-2xl">Hacker's Gambit</h1>
            <div className="text-cyber-yellow text-xl">
              Turn {turnCount}
            </div>
          </div>
          {/* Phaser game will be mounted here */}
        </div>
        <div className="flex items-center ml-4">
          <button
            onClick={handleEndTurn}
            disabled={currentTurn !== 1}
            className={`px-6 py-3 rounded text-lg font-bold
              ${currentTurn === 1 
                ? 'bg-cyber-blue text-cyber-black hover:bg-cyber-pink transition-colors' 
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
          >
            End Turn
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  )
}

export default App
