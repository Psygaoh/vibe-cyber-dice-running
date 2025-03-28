import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import GameScreen from './components/GameScreen'

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-black m-0 p-0">
      <Header />
      
      <main className="flex-1 flex w-full m-3">
        <GameScreen />
      </main>

      <Footer />
    </div>
  )
}

export default App
