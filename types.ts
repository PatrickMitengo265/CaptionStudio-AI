
export enum AppStep {
  UPLOAD = 'UPLOAD',
  REMOVE = 'REMOVE',
  CAPTION = 'CAPTION',
  TRANSLATE = 'TRANSLATE',
  EXPORT = 'EXPORT'
}

export interface VideoFile {
  name: string;
  size: number;
  type: string;
  previewUrl: string;
  file: File;
}

export interface ProcessingState {
  status: 'idle' | 'processing' | 'completed' | 'error';
  progress: number;
  message: string;
}
