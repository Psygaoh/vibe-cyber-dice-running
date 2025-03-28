interface MenuProps {
  currentTurn: 1 | 2;
  onEndTurn: () => void;
  turnCount: number;
}

export function Menu({ currentTurn, onEndTurn, turnCount }: MenuProps) {
  return (
    <div className="w-[250px] flex-shrink-0">
      <div className="w-full flex flex-col gap-6 p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-100">Current Turn</h2>
          <p className={`text-2xl ${currentTurn === 1 ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
            {currentTurn === 1 ? 'Human (P1)' : 'AI (P2)'}
          </p>
          <p className="text-xl text-gray-200 mt-1">Turn {turnCount}</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-100">Stats</h2>
          <div className="flex flex-col items-center gap-2 text-gray-200">
            <p className="text-xl">Moves Made: 0</p>
            <p className="text-xl">Time Elapsed: 0:00</p>
          </div>
        </div>

        <button 
          className={`mt-4 px-8 py-3 rounded-lg text-xl transition-colors
            ${currentTurn === 1 
              ? 'bg-cyan-400/10 border-2 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20'
              : 'bg-gray-500/20 border-2 border-gray-500/30 text-gray-500 cursor-not-allowed'}`}
          onClick={onEndTurn}
          disabled={currentTurn === 2}
        >
          End Turn
        </button>
      </div>
    </div>
  );
} 