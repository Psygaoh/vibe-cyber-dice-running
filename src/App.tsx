import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StartModal } from './components/game-components/StartModal'
import { Game } from './components/Game'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [currentTurn, setCurrentTurn] = useState<1 | 2>(1)

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-black m-0 p-0">
      <Header />
      
      <main className="flex-1 flex">
        {/* Left Column - Menu */}
        <div className="w-[250px] flex-shrink-0">
          <div className="w-full flex flex-col gap-6 p-4">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2">Current Turn</h2>
              <p className={`text-2xl ${currentTurn === 1 ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                Player {currentTurn}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2">Stats</h2>
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl">Moves Made: 0</p>
                <p className="text-xl">Time Elapsed: 0:00</p>
              </div>
            </div>

            <button 
              className="mt-4 px-8 py-3 bg-cyan-400/10 border-2 border-cyan-400/30 rounded-lg 
                       text-xl text-cyan-400 hover:bg-cyan-400/20 transition-colors"
              onClick={() => setCurrentTurn(current => current === 1 ? 2 : 1)}
            >
              End Turn
            </button>
          </div>
        </div>

        {/* Game Board */}
        <div className="flex-1 flex items-center justify-center">
          <Game currentTurn={currentTurn} />
          <StartModal isOpen={!isGameStarted} onStart={() => setIsGameStarted(true)} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
