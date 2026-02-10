
import React from 'react';
import { AppStep } from '../types';

interface SidebarProps {
  currentStep: AppStep;
  onStepChange: (step: AppStep) => void;
  isDisabled: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, onStepChange, isDisabled }) => {
  const steps = [
    { id: AppStep.UPLOAD, icon: 'cloud_upload', label: 'Upload' },
    { id: AppStep.REMOVE, icon: 'content_cut', label: 'Remove' },
    { id: AppStep.CAPTION, icon: 'closed_caption', label: 'Caption' },
    { id: AppStep.TRANSLATE, icon: 'translate', label: 'Translate' },
    { id: AppStep.EXPORT, icon: 'file_download', label: 'Export' },
  ];

  return (
    <aside className="hidden sm:flex w-24 border-r border-primary/10 flex-col items-center py-8 gap-8 bg-background-light/20 dark:bg-background-dark/20 z-40">
      {steps.map((step) => {
        const isActive = currentStep === step.id;
        const disabled = isDisabled && step.id !== AppStep.UPLOAD;

        return (
          <button
            key={step.id}
            onClick={() => !disabled && onStepChange(step.id)}
            disabled={disabled}
            className={`flex flex-col items-center gap-1 group transition-all duration-300 ${
              disabled ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-105'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'bg-primary text-white shadow-[0_0_20px_rgba(19,200,236,0.5)]' 
                : 'bg-white/5 dark:bg-primary/10 text-slate-400 dark:text-slate-500 hover:bg-primary/20 hover:text-primary'
            }`}>
              <span className={`material-icons ${isActive ? 'text-2xl' : 'text-xl'}`}>{step.icon}</span>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-tight transition-colors ${
              isActive ? 'text-primary' : 'text-slate-500'
            }`}>
              {step.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
