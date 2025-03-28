import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Game } from './components/Game'

function App() {
  const [currentTurn, setCurrentTurn] = useState<1 | 2>(1)

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-black m-0 p-0">
      <Header />
      
      <main className="flex-1 flex">
        <Game currentTurn={currentTurn} />
      </main>

      <Footer />
    </div>
  )
}

export default App
