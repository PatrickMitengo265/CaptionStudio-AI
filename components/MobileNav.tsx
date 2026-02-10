
import React from 'react';
import { AppStep } from '../types';

interface MobileNavProps {
  currentStep: AppStep;
  onStepChange: (step: AppStep) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentStep, onStepChange }) => {
  const tabs = [
    { id: 'studio', icon: 'dashboard', label: 'Studio' },
    { id: 'projects', icon: 'history', label: 'Projects' },
    { id: 'pricing', icon: 'workspace_premium', label: 'Pricing' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <nav className="sm:hidden grid grid-cols-4 border-t border-primary/10 bg-background-light dark:bg-background-dark py-3 px-2 sticky bottom-0 z-50 backdrop-blur-lg bg-opacity-80">
      {tabs.map((tab) => {
        const isActive = tab.id === 'studio'; // Assuming studio is the main view
        return (
          <button 
            key={tab.id}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <span className="material-icons text-2xl">{tab.icon}</span>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileNav;
