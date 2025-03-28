import React, { useState } from 'react';

interface MenuProps {
  currentTurn: 1 | 2;
  onEndTurn: () => void;
  turnCount: number;
  onToggleMusic: (muted: boolean) => void;
  onToggleSFX: (muted: boolean) => void;
}

export function Menu({ currentTurn, onEndTurn, turnCount, onToggleMusic, onToggleSFX }: MenuProps) {
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const [isSFXMuted, setIsSFXMuted] = useState(false);

  const handleMusicToggle = () => {
    const newMuted = !isMusicMuted;
    setIsMusicMuted(newMuted);
    onToggleMusic(newMuted);
  };

  const handleSFXToggle = () => {
    const newMuted = !isSFXMuted;
    setIsSFXMuted(newMuted);
    onToggleSFX(newMuted);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
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

        <div className="flex flex-col items-center gap-4">
          <button 
            className={`px-8 py-3 rounded-lg text-xl transition-colors
              ${currentTurn === 1 
                ? 'bg-cyan-400/10 border-2 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20'
                : 'bg-gray-500/20 border-2 border-gray-500/30 text-gray-500 cursor-not-allowed'}`}
            onClick={onEndTurn}
            disabled={currentTurn === 2}
          >
            End Turn
          </button>

          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-lg text-sm transition-colors
                ${isMusicMuted
                  ? 'bg-red-500/10 border-2 border-red-500/30 text-red-400'
                  : 'bg-green-500/10 border-2 border-green-500/30 text-green-400'}`}
              onClick={handleMusicToggle}
            >
              {isMusicMuted ? '🔇 Music Off' : '🔊 Music On'}
            </button>

            <button
              className={`px-4 py-2 rounded-lg text-sm transition-colors
                ${isSFXMuted
                  ? 'bg-red-500/10 border-2 border-red-500/30 text-red-400'
                  : 'bg-green-500/10 border-2 border-green-500/30 text-green-400'}`}
              onClick={handleSFXToggle}
            >
              {isSFXMuted ? '🔇 SFX Off' : '🔊 SFX On'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 