
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-icons text-white text-xl">auto_awesome</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          CaptionStudio <span className="text-primary text-xs align-top">AI</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-[11px] font-bold text-primary uppercase">Pro Status</span>
        </div>
        
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 ring-primary/50 transition-all">
          <img 
            alt="User Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLNhNjKLUXlRK8CmYKeA3gWu9mYz8-T21hpyYUOE1A3BR-1Ynso9lGRjlKLf6-UQ7FMAAlar5nSHa4HExHw7XDNRyIfdJIHsSILu3Yz7igUK80lO3IXIPG6UjU3z-BeH_jeTmv6PpYjnnOtHV2YMvPFrMjJuLV4EaV-rhrMzIpb2mmVBQ3ddDaWr10Q6OUw0PAn0ReJl8k5PTk43jZTwvEcEjvJvqpEatdq38pUHxmnKcaTnI7lZMP6iu4VgJteofeZeVfBdbxmIw" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
