interface MenuProps {
  currentTurn: 1 | 2;
  onEndTurn: () => void;
}

export function Menu({ currentTurn, onEndTurn }: MenuProps) {
  return (
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
          onClick={onEndTurn}
        >
          End Turn
        </button>
      </div>
    </div>
  );
} 