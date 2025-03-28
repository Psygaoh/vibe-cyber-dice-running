interface StartModalProps {
  isOpen: boolean;
  onStart: () => void;
}

export function StartModal({ isOpen, onStart }: StartModalProps) {
  return (
    <dialog open={isOpen} className="bg-black/90 text-cyan-400 p-8 rounded-lg border-2 border-cyan-400/30">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold">Welcome to Hacker's Gambit</h2>
        <p className="text-xl text-center">
          A tactical strategy game where two players compete to control the grid.
        </p>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-cyan-400/10 border-2 border-cyan-400/30 rounded-lg 
                   text-xl text-cyan-400 hover:bg-cyan-400/20 transition-colors"
        >
          Start Game
        </button>
      </div>
    </dialog>
  );
} 