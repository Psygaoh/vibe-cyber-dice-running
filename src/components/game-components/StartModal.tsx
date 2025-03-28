interface StartModalProps {
  isOpen: boolean;
  onStart: () => void;
}

export function StartModal({ isOpen, onStart }: StartModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-2xl pointer-events-auto">
      <div className="bg-black/90 text-cyan-400 p-8 rounded-lg border-2 border-cyan-400/30">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold">Welcome to Hacker's Gambit</h2>
          
          <div className="flex flex-col gap-4 text-lg text-center max-w-2xl">
            <p>
              In this tactical hacking game, you and your opponent are trying to breach through a data wall to destroy each other's core systems.
            </p>
            
            <div className="flex flex-col gap-2">
              <p className="text-cyan-400">Your Core (P1) is at the bottom, your opponent's (P2) at the top.</p>
              <p>Each turn, you can hack adjacent data blocks to create a path.</p>
              <p>The first player to create a path to their opponent's core and destroy it wins.</p>
            </div>

            <p className="text-sm text-cyan-400/70">
              Ready to start hacking?
            </p>
          </div>

          <button
            onClick={onStart}
            className="px-8 py-3 bg-cyan-400/10 border-2 border-cyan-400/30 rounded-lg 
                     text-xl text-cyan-400 hover:bg-cyan-400/20 transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
} 