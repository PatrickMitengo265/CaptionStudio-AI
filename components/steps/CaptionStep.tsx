
import React, { useState } from 'react';
import { VideoFile } from '../../types';

interface CaptionStepProps {
  videoFile: VideoFile | null;
}

const CaptionStep: React.FC<CaptionStepProps> = ({ videoFile }) => {
  const [style, setStyle] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);

  const styles = [
    { id: 'modern', label: 'Modern', icon: 'style' },
    { id: 'bold', label: 'Bold', icon: 'format_bold' },
    { id: 'karaoke', label: 'Karaoke', icon: 'mic_external_on' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/5">
        <video 
          src={videoFile?.previewUrl} 
          className="w-full h-full object-contain"
          muted
          autoPlay
          loop
        />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center px-4">
          <div className="bg-black/60 backdrop-blur-sm px-6 py-2 rounded-lg border border-white/10">
            <p className={`text-xl font-bold text-center tracking-tight ${
              style === 'modern' ? 'text-white font-medium' : 
              style === 'bold' ? 'text-primary uppercase italic' : 
              'text-yellow-400 drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]'
            }`}>
              AI is currently generating captions...
            </p>
          </div>
        </div>
        {isGenerating && (
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-primary font-bold animate-pulse">Analyzing Audio...</p>
          </div>
        )}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-base font-bold mb-6 flex items-center gap-2">
          <span className="material-icons text-primary">closed_caption</span>
          Captioning Settings
        </h4>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {styles.map(s => (
            <button
              key={s.id}
              onClick={() => setStyle(s.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                style === s.id ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              <span className={`material-icons ${style === s.id ? 'text-primary' : 'text-slate-500'}`}>{s.icon}</span>
              <span className="text-[10px] font-bold uppercase">{s.label}</span>
            </button>
          ))}
        </div>

        <button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-4 bg-primary text-background-dark font-black rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {isGenerating ? 'GENERATING...' : 'GENERATE AI CAPTIONS'}
        </button>
      </div>
    </div>
  );
};

export default CaptionStep;
