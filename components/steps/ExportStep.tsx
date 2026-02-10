
import React, { useState } from 'react';
import { VideoFile } from '../../types';

interface ExportStepProps {
  videoFile: VideoFile | null;
}

const ExportStep: React.FC<ExportStepProps> = ({ videoFile }) => {
  const [resolution, setResolution] = useState('720p');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-3xl bg-primary/10 flex items-center justify-center text-primary relative z-10">
            <span className="material-icons text-7xl">rocket_launch</span>
          </div>
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Export</h3>
          <p className="text-sm text-slate-400">All AI layers have been processed and are ready for rendering.</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <button 
            onClick={() => setResolution('720p')}
            className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
              resolution === '720p' ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/5'
            }`}
          >
            <span className="text-xl font-black">720p</span>
            <span className="text-[10px] font-bold uppercase text-primary">Free</span>
          </button>
          
          <button 
            onClick={() => {}}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 transition-all flex flex-col items-center gap-2 opacity-60 grayscale hover:grayscale-0"
          >
            <div className="flex items-center gap-1">
              <span className="text-xl font-black">4K</span>
              <span className="material-icons text-sm text-primary">bolt</span>
            </div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Premium</span>
          </button>
        </div>

        <div className="w-full space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 px-1">
            <span>Encoding Progress</span>
            <span>100%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-full bg-primary shadow-[0_0_10px_rgba(19,200,236,0.5)]"></div>
          </div>
        </div>

        <button className="w-full py-5 bg-primary text-background-dark font-black rounded-2xl shadow-xl flex items-center justify-center gap-3 group active:scale-[0.98] transition-all">
          DOWNLOAD VIDEO
          <span className="material-icons group-hover:translate-y-1 transition-transform">file_download</span>
        </button>
      </div>
    </div>
  );
};

export default ExportStep;
