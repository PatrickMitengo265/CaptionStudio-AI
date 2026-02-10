
import React, { useRef, useState } from 'react';

interface UploadStepProps {
  onFileSelect: (file: File) => void;
}

const UploadStep: React.FC<UploadStepProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-6 transition-all duration-300 overflow-hidden ${
        isDragging 
          ? 'border-primary bg-primary/10 scale-[1.02]' 
          : 'border-primary/30 bg-primary/[0.02] hover:bg-primary/[0.05]'
      }`}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="video/*" 
        className="hidden" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className={`w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 ${isDragging ? 'scale-110' : ''}`}>
        <span className="material-icons text-6xl">upload_file</span>
      </div>

      <div className="text-center px-6 z-10">
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Upload Video</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Drag and drop or tap to browse files</p>
        <div className="flex justify-center gap-4 mt-4">
          <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 uppercase tracking-widest font-semibold">MP4</span>
          <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 uppercase tracking-widest font-semibold">MOV</span>
          <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Max 500MB</span>
        </div>
      </div>

      <button 
        onClick={() => fileInputRef.current?.click()}
        className="px-10 py-4 bg-primary text-background-dark font-black rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all z-10"
      >
        SELECT FILE
      </button>
    </div>
  );
};

export default UploadStep;
