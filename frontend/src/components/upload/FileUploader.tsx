
import React, { useState } from 'react';
import { Cloud, FileText, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging 
          ? 'border-genechain-purple bg-genechain-light-purple/30' 
          : file 
            ? 'border-green-400 bg-green-50' 
            : 'border-gray-300 hover:border-genechain-purple hover:bg-genechain-light-purple/10'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {!file ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 rounded-full bg-genechain-light-purple">
            <Cloud className="h-10 w-10 text-genechain-purple" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Drag & drop your genome file</h3>
            <p className="text-sm text-genechain-dark/70 mb-4">
              Supports .txt, .vcf, .fastq, and other genome file formats (max 2GB)
            </p>
            <div className="relative">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileSelect}
                accept=".txt,.vcf,.fastq"
              />
              <Button className="btn-gradient">
                <Upload className="h-4 w-4 mr-2" />
                Browse files
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">File selected</h3>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <FileText className="h-4 w-4" />
              <span className="font-medium">{file.name}</span>
              <span className="text-genechain-dark/50">
                ({(file.size / (1024 * 1024)).toFixed(2)} MB)
              </span>
            </div>
            <Button 
              variant="ghost" 
              className="mt-4 text-sm text-genechain-dark/70"
              onClick={() => setFile(null)}
            >
              Change file
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
