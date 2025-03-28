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
        <Game currentTurn={currentTurn} />
        <StartModal isOpen={!isGameStarted} onStart={() => setIsGameStarted(true)} />
      </main>

      <Footer />
    </div>
  )
}

export default App
