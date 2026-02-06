
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import InvitationCard from './components/InvitationCard';
import SuccessCard from './components/SuccessCard';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-50 overflow-hidden px-4">
      {/* Background Decor */}
      <FloatingHearts count={20} />
      
      <div className="w-full max-w-lg z-10 transition-all duration-700 ease-in-out">
        {!isAccepted ? (
          <InvitationCard 
            name="Anushka" 
            onAccept={() => setIsAccepted(true)} 
          />
        ) : (
          <SuccessCard />
        )}
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-4 left-4 text-4xl opacity-30 select-none">✨</div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-30 select-none">✨</div>
    </div>
  );
};

export default App;
