import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

const UploadPage: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files?.[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Genome</h1>
        <p className="text-gray-600">
          Upload your genetic data file to create your genome NFT. We support .txt and .vcf formats.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-purple-600 bg-purple-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload
          size={48}
          className={`mx-auto mb-4 ${
            dragActive ? 'text-purple-600' : 'text-gray-400'
          }`}
        />
        <p className="text-lg mb-2">
          {selectedFile
            ? `Selected: ${selectedFile.name}`
            : 'Drag and drop your genome file here'}
        </p>
        <p className="text-sm text-gray-500 mb-4">or</p>
        <label className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors">
          Browse Files
          <input
            type="file"
            className="hidden"
            accept=".txt,.vcf"
            onChange={handleFileSelect}
          />
        </label>
      </div>

      {/* Metadata Form */}
      <form className="bg-white rounded-lg p-8 shadow-lg space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data Access Level
          </label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option value="private">Private</option>
            <option value="approved">Only Approved Researchers</option>
            <option value="open">Open Access</option>
          </select>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="consent"
            className="mt-1"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I consent to the storage and processing of my genetic data according to
            the terms of service and privacy policy.
          </label>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="text-blue-500 flex-shrink-0" />
          <p className="text-sm text-blue-700">
            Your data will be encrypted and stored on IPFS. You'll maintain full
            control through your NFT and can revoke access at any time.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Upload to IPFS & Mint NFT
        </button>
      </form>
    </div>
  );
};

export default UploadPage;