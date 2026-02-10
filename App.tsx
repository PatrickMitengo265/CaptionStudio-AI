
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MobileNav from './components/MobileNav';
import { AppStep, VideoFile, ProcessingState } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.UPLOAD);
  const [videoFile, setVideoFile] = useState<VideoFile | null>(null);
  const [processing, setProcessing] = useState<ProcessingState>({
    status: 'idle',
    progress: 0,
    message: ''
  });

  const handleFileSelect = (file: File) => {
    const video: VideoFile = {
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: URL.createObjectURL(file),
      file: file
    };
    setVideoFile(video);
    setCurrentStep(AppStep.REMOVE);
  };

  const handleStepChange = (step: AppStep) => {
    if (!videoFile && step !== AppStep.UPLOAD) return;
    setCurrentStep(step);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          currentStep={currentStep} 
          onStepChange={handleStepChange} 
          isDisabled={!videoFile} 
        />
        
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark/50">
          <MainContent 
            currentStep={currentStep} 
            videoFile={videoFile} 
            onFileSelect={handleFileSelect}
            processing={processing}
            setProcessing={setProcessing}
          />
        </main>
      </div>

      <MobileNav currentStep={currentStep} onStepChange={handleStepChange} />
    </div>
  );
};

export default App;
