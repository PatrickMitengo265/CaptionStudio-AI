
import React from 'react';
import { AppStep, VideoFile, ProcessingState } from '../types';
import UploadStep from './steps/UploadStep';
import RemoveStep from './steps/RemoveStep';
import CaptionStep from './steps/CaptionStep';
import TranslateStep from './steps/TranslateStep';
import ExportStep from './steps/ExportStep';

interface MainContentProps {
  currentStep: AppStep;
  videoFile: VideoFile | null;
  onFileSelect: (file: File) => void;
  processing: ProcessingState;
  setProcessing: React.Dispatch<React.SetStateAction<ProcessingState>>;
}

const MainContent: React.FC<MainContentProps> = ({ 
  currentStep, 
  videoFile, 
  onFileSelect, 
  processing, 
  setProcessing 
}) => {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto flex flex-col min-h-full gap-6">
      {/* Pro Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4 transition-all hover:bg-primary/10">
        <div className="bg-primary/20 p-2 rounded-lg">
          <span className="material-icons text-primary">info</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">Free Plan:</span> HD export limited to 720p.
          </p>
          <button className="text-[11px] font-bold text-primary uppercase tracking-wider mt-1 hover:underline text-left">
            Upgrade to 4K & Remove Watermarks
          </button>
        </div>
      </div>

      <div className="flex-1">
        {currentStep === AppStep.UPLOAD && (
          <UploadStep onFileSelect={onFileSelect} />
        )}
        {currentStep === AppStep.REMOVE && (
          <RemoveStep videoFile={videoFile} />
        )}
        {currentStep === AppStep.CAPTION && (
          <CaptionStep videoFile={videoFile} />
        )}
        {currentStep === AppStep.TRANSLATE && (
          <TranslateStep videoFile={videoFile} />
        )}
        {currentStep === AppStep.EXPORT && (
          <ExportStep videoFile={videoFile} />
        )}
      </div>

      {/* Persistent Bottom Action */}
      <div className="mt-auto">
        <button className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 text-background-dark font-black rounded-xl shadow-[0_8px_30px_rgb(19,200,236,0.3)] flex items-center justify-center gap-2 group transform active:scale-[0.98] transition-all">
          GO PRO FOR 4K
          <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">bolt</span>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
