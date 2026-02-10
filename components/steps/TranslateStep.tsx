
import React, { useState } from 'react';
import { VideoFile } from '../../types';

interface TranslateStepProps {
  videoFile: VideoFile | null;
}

const TranslateStep: React.FC<TranslateStepProps> = ({ videoFile }) => {
  const [targetLang, setTargetLang] = useState('es');

  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-icons text-4xl">translate</span>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Global Translation</h3>
          <p className="text-sm text-slate-400 max-w-sm">Automatically translate both captions and audio (dubbing) to your target audience.</p>
        </div>
        
        <div className="w-full max-w-xs">
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2 text-left">Select Language</label>
          <select 
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-xs text-primary">check_circle</span>
              <span className="text-[10px] font-bold uppercase text-slate-400">Audio Sync</span>
            </div>
            <p className="text-[11px] text-slate-500 text-left">Lip-sync AI technology available with Pro plan.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
             <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-xs text-primary">check_circle</span>
              <span className="text-[10px] font-bold uppercase text-slate-400">Dialects</span>
            </div>
            <p className="text-[11px] text-slate-500 text-left">Natural regional accents supported for 40+ countries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateStep;
