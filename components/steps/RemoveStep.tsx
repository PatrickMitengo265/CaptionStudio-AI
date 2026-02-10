
import React, { useState } from 'react';
import { VideoFile } from '../../types';

interface RemoveStepProps {
  videoFile: VideoFile | null;
}

const RemoveStep: React.FC<RemoveStepProps> = ({ videoFile }) => {
  const [selectedOption, setSelectedOption] = useState<'soft' | 'hard'>('soft');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center relative group">
        {videoFile ? (
          <video 
            src={videoFile.previewUrl} 
            className="w-full h-full object-contain" 
            controls 
          />
        ) : (
          <div className="text-slate-500 italic">No video selected</div>
        )}
      </div>

      <div className="bg-white/5 dark:bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <h4 className="text-base font-bold mb-6 flex items-center gap-2">
          <span className="material-icons text-primary">settings</span>
          Step 1: Removal Options
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => setSelectedOption('soft')}
            className={`p-5 rounded-xl border transition-all text-left flex flex-col gap-3 group ${
              selectedOption === 'soft' 
                ? 'bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(19,200,236,0.1)]' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedOption === 'soft' ? 'bg-primary text-white' : 'bg-white/10 text-slate-400'
            }`}>
              <span className="material-icons">subtitles_off</span>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-tight mb-1 ${
                selectedOption === 'soft' ? 'text-primary' : 'text-slate-300'
              }`}>Soft Delete</p>
              <p className="text-[11px] text-slate-500 leading-normal">Removes digital track metadata, subtitles, and hidden audio tags from the file stream.</p>
            </div>
          </button>

          <button 
            onClick={() => setSelectedOption('hard')}
            className={`p-5 rounded-xl border transition-all text-left flex flex-col gap-3 group ${
              selectedOption === 'hard' 
                ? 'bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(19,200,236,0.1)]' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedOption === 'hard' ? 'bg-primary text-white' : 'bg-white/10 text-slate-400'
            }`}>
              <span className="material-icons">blur_on</span>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-tight mb-1 ${
                selectedOption === 'hard' ? 'text-primary' : 'text-slate-300'
              }`}>Hard Burn</p>
              <p className="text-[11px] text-slate-500 leading-normal">AI-powered visual removal. Erases hard-coded watermarks, logos, and overlays directly from pixels.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveStep;
