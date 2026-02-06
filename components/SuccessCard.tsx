
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const SuccessCard: React.FC = () => {
  const [poem, setPoem] = useState<string>("");
  const [loadingPoem, setLoadingPoem] = useState(false);

  const generateSpecialNote = async () => {
    setLoadingPoem(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Write a very short, cute, 2-line Valentine's poem for a girl named Anushka who just said 'Yes' to being a Valentine.",
      });
      if (response.text) {
        setPoem(response.text.trim());
      }
    } catch (e) {
      console.error("Failed to generate poem", e);
    } finally {
      setLoadingPoem(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-pink-200 text-center space-y-6 animate-[bounceIn_0.8s_both] w-full max-w-md mx-auto relative overflow-hidden">
      {/* Decorative background sparkle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="space-y-2 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-cursive">Good job!</h2>
        <p className="text-pink-600 font-semibold italic text-lg md:text-xl">I knew you'd make the right choice!</p>
      </div>

      <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-white mx-auto w-full aspect-video bg-pink-50 flex items-center justify-center">
        <img 
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHYxcW93NjZidXoxZzl6Zzl6Zzl6Zzl6Zzl6Zzl6Zzl6Zzl6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/Xp9G3V3lX1oAg/giphy.gif"
          alt="Phil Dunphy Thumbs Up" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if Giphy is ever down
            (e.target as HTMLImageElement).src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHYxcW93NjZidXoxZzl6Zzl6Zzl6Zzl6Zzl6Zzl6Zzl6Zzl6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKxG6b3z3z3z3z3/giphy.gif";
          }}
        />
        <div className="absolute inset-0 ring-4 ring-inset ring-pink-400/20 pointer-events-none"></div>
      </div>

      <div className="flex flex-col items-center gap-4 px-2 relative z-10">
        {!poem && !loadingPoem && (
          <button 
            onClick={generateSpecialNote}
            className="group flex items-center gap-2 text-sm text-pink-500 hover:text-pink-600 transition-all font-bold px-4 py-2 bg-pink-50 rounded-full hover:bg-pink-100"
          >
            <span>Click for a tiny surprise</span>
            <span className="group-hover:rotate-12 transition-transform">🎁</span>
          </button>
        )}
        
        {loadingPoem && <div className="animate-pulse text-pink-400 font-medium">✨ Writing something special for Anushka...</div>}
        
        {poem && (
          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-5 rounded-2xl border-2 border-pink-100 italic text-pink-800 animate-[fadeIn_1s_ease] text-base md:text-lg shadow-inner">
            "{poem}"
          </div>
        )}
      </div>

      <div className="pt-2">
        <div className="flex justify-center gap-4">
          {['💖', '🌸', '✨', '🌸', '💖'].map((emoji, i) => (
            <span key={i} className="animate-bounce text-2xl" style={{ animationDelay: `${i * 0.15}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
