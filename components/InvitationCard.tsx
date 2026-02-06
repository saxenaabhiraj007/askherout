
import React, { useState } from 'react';

interface InvitationCardProps {
  name: string;
  onAccept: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ name, onAccept }) => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const [noCount, setNoCount] = useState(0);
  const [showTryAgain, setShowTryAgain] = useState(false);

  const handleNoClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setNoCount(prev => prev + 1);
    setShowTryAgain(true);
  };

  const handleNoHover = () => {
    // Only move on desktop (fine pointer) to avoid issues on mobile tap
    if (window.matchMedia("(pointer: fine)").matches && noCount > 0) {
      const x = Math.random() * 140 - 70;
      const y = Math.random() * 100 - 50;
      setNoButtonStyle({
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
      });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-white text-center space-y-8 animate-[fadeIn_0.5s_ease-out]">
        <div className="space-y-4">
          <div className="text-6xl mb-4 pulse-soft inline-block">💝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-cursive tracking-wide leading-tight">
            Hey {name}!
          </h1>
          <p className="text-xl md:text-2xl text-pink-700 font-semibold leading-relaxed">
            Will you be my Valentine? 🌹
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <button
            onClick={onAccept}
            className="w-full sm:w-auto group relative px-10 py-4 bg-red-500 hover:bg-red-600 text-white text-xl font-black rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg hover:shadow-red-200 min-w-[140px]"
          >
            <span className="relative z-10">Yes! 💖</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
          </button>

          <button
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            style={noButtonStyle}
            className="w-full sm:w-auto px-10 py-4 border-2 border-pink-200 text-pink-400 text-xl font-bold rounded-full hover:bg-pink-50 transition-all shadow-sm min-w-[140px]"
          >
            No 😢
          </button>
        </div>
        
        <p className="text-xs text-pink-300 italic pt-2 font-medium">
          * Hint: The left button works much better!
        </p>
      </div>

      {/* Custom "Try Again" Popup Modal */}
      {showTryAgain && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-pink-900/40 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center space-y-8 transform animate-[bounceIn_0.5s_ease-out] border-4 border-pink-200">
            <div className="text-7xl">🙅‍♀️</div>
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-red-600 font-cursive">Try again!</h3>
              <p className="text-gray-600 font-bold text-lg leading-snug">
                Oops, that button seems to be broken. Please try the "Yes" button instead! 😉
              </p>
            </div>
            <button
              onClick={() => setShowTryAgain(false)}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg font-black rounded-2xl shadow-xl transition-all active:scale-95"
            >
              Okay, I'll try again! ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationCard;
